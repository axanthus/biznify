


const getToken = () =>{
    const url = `https://api.iq.inrix.com/auth/v1/appToken?appId=4he4g15183&hashToken=NGhlNGcxNTE4M3x6RkU1TkxHNTBLMmJvejJBSlB6NGQxRHFkdFN5QXJ3WFlCb0hydUU0`;
    const requestOptions = {
        method: 'GET'
    };
    return fetch(url,requestOptions)
    .then((resp) => {
        if(resp.ok){
            console.log("Worked");
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
        console.log(tok);
        const options = {
            method: 'GET',
            headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tok
            }
        }
        return fetch('https://api.iq.inrix.com/lots/v3?point='+lat+'-'+long+'&radius=1000',options)
        .then((resp) => {
            if(resp.ok){
                console.log("Call to Lots API Worked");
                return resp.json();
            }else{
                Promise.reject(resp.status);
            }
        })
        .catch((err) => {
            console.error("error",err);
        })
    })
}



console.log("Page loaded");


