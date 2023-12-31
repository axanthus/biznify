


const getToken = () => {
    const url = `https://api.iq.inrix.com/auth/v1/appToken?appId=${process.env.INRIX_APP_ID}&hashToken=${process.env.INRIX_HASH_TOKEN}`;
    const requestOptions = {
        method: 'GET',
        next: { revalidate: 1790 }, //30 minutes is 1800 seconds, so fetch this token every 29 minutes
    };
    //console.log('before fetch: ', Date.now())
    return fetch(url,requestOptions)
        .then((resp) => {
        //console.log(resp)
        if (resp.ok) {
            //console.log("after fetch: ", Date.now());
            return resp.json();
        }else{
            Promise.reject(resp.status);
        }
    })
    .catch((err) => {
        console.error("error",err);
    })
}


export const getLots =  async (lat:Number,long:Number) =>{
    return getToken().then((returnedToken)=>{
        let tok = JSON.stringify(returnedToken.result.token)
        const options = {
            method: 'GET',
            headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tok
            }
        }
        return fetch('https://api.iq.inrix.com/lots/v3?point='+lat+'%7C'+long+'&radius=150',options)
        .then((resp) => {
            if(resp.ok){
                console.log("Call to Lots API Worked");
                return resp.json();
            }else{
                Promise.reject(resp.status);
            }
        })
        .catch((err) => {
            console.error("error getting token",err);
        })
    })
}


export const getTripsCount = async (lat:Number,long:Number) => {
    return getToken()
    .then(async (returnedToken)=>{
        let tok = JSON.stringify(returnedToken.result.token)
        const options = {
            method: 'GET',
            headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tok
            }
        }
        return fetch('https://api.iq.inrix.com/v1/trips-count?od=destination&geoFilterType=circle&radius=0.3km&points='+lat+'%7C'+long+'&limit=100&startDateTime=%3E%3D2023-06-01T02%3A31&endDateTime=%3C%3D2023-06-15T02%3A31',options)
        .then((resp)=>{
            if(resp.ok)
            {
                console.log("Trips to Destination API worked");
                return resp.json();
            }else{
                console.log("Trips to Destination API FAILED");
                Promise.reject(resp.status);
            }
        })
        .catch((err)=>{
            console.error("error getting data",err);
        })

    }).catch((err)=>{
        console.error("error getting token",err);
    })

}

export const onStreetParking = async (lat:Number,long:Number) => {
    return getToken()
    .then(async (returnedToken)=>{
        let tok = JSON.stringify(returnedToken.result.token)
        const options = {
            method: 'GET',
            headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tok
            }
        }
        return fetch('https://api.iq.inrix.com/blocks/v3?point='+lat+'%7C'+long+'&radius=50',options)
        .then((resp)=>{
            if(resp.ok)
            {
                console.log("Trips to On Street Parking API worked");
                return resp.json();
            }else{
                console.log("Trips to On Street Parking API FAILED");
                Promise.reject(resp.status);
            }
        }).then((z)=>{
            let cumulativeTotal = 0;
            // Check if 'result' key exists and is an array
            if (z && z.result && Array.isArray(z.result)) {
                z.result.forEach((resultItem:any) => {
                // Check if 'segments' key exists and is an array
                if (resultItem.segments && Array.isArray(resultItem.segments)) {
                    resultItem.segments.forEach((segmentItem:any) => {
                    // Check if 'spacesTotal' key exists and is a number
                    if (segmentItem.spacesTotal && typeof segmentItem.spacesTotal === 'number') {
                        cumulativeTotal += segmentItem.spacesTotal;
                    }
                    });
                }
                });
            }
            return cumulativeTotal;
        })
        .catch((err)=>{
            console.error("error getting data",err);
        })

    }).catch((err)=>{
        console.error("error getting token",err);
    })

}

