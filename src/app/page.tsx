import { getLots, getTripsCount,onStreetParking } from '@/lib/inrix';
import LocationCard from './components/location-card';
import SearchBar from './components/search-bar';


export default async function Home() {

  // //add your api calls here using Fetch
  // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
  //   next: { revalidate: 10 }, //every 10 seconds, revalidate data (ISR)
  // }) 
  // const data = await response.json()
  // console.log(data)

  // /*
  // How to use getLots 
  // Parameters -> (Lat, Long)
  // Return -> JSON list of different parking lots w/ inf
  // If we only want the # of lots in the area,
  // use .count
  // Example:
  // */

  // let x = await getLots(37.7888752700283,-122.4336311214917);
  // console.log('Number of Lots nearby location: '+JSON.stringify(x.count));

  // /*
  // How to use getTripsCount;
  // Parameters -> (Lat, Long)
  // Return -> JSON. To access integer, Use .count
  // Example:
  // */
  // let y = await getTripsCount(37.7888752700283,-122.4336311214917);
  // console.log("Number of occurrences in which person travels to location during week: "+JSON.stringify(y.count));


  // /*
  // How to use onStreetParking
  // Parameters -> (Lat,Long)
  // Returns -> Int of # of parking spots in the area (onstreet) 
  // */
  // let z = await onStreetParking(37.7888752700283,-122.4336311214917);
  // console.log("Number of on-street parking spots "+z);



  return (
    <main style={{backgroundImage:"url(/bg-accent.png)"}} className=" bg-no-repeat bg-contain min-h-screen px-24 pt-12 space-y-12">
      <div className='space-y-4'>
        <h1 className='text-primary text-[4rem] font-black'>Biznify</h1>
        <h2 className=' text-accent-light text-4xl font-bold'>Specify a location for your business <span className='text-xl text-primary'>(and we&apos;ll do the rest)</span></h2>
      </div>
      <div className='space-y-12'>
        <SearchBar />
        <div className='flex flex-row'>
          <section className=' w-1/2 p-8 flex flex-col gap-8 border-4 border-dashed border-accent-dark rounded-xl'>
            <h2 className='text-4xl font-semibold text-gray-500'>Best Locations</h2>
            <div className='w-full'>
              <LocationCard />
            </div>
          </section>
          <section>
            <div>map</div>
          </section>
        </div>
      </div>
    </main>
  )
}
