'use client'
import useSearchandMap from "../useSearchandMap";
import LocationCard from "./location-card";
import Map from "./map";
import SearchBar from "./search-bar";

export default function SearchAndMap() {
  const { selectedLocation, mapZoom, locations, handleLocationClick, handleSearchWrapper} = useSearchandMap()
  
  return (
    <div className='space-y-12'>
        <SearchBar onSearch={handleSearchWrapper} />
        <div className='flex flex-row gap-12'>
          <section className=' h-96 overflow-scroll w-1/2 p-8 flex flex-col gap-8 border-4 border-dashed border-accent-dark rounded-xl'>
            <h2 className='text-4xl font-semibold text-gray-500'>Best Locations</h2>
          <div className='w-full space-y-8'>
            {locations.map((location, index) => (
                <LocationCard location={location}  key={index} onClick={() => handleLocationClick(location.coords)} />
                ))}
            </div>
          </section>
          <section className=" flex-1 relative">
          <Map locations={locations} center={selectedLocation} zoom={mapZoom} />
          </section>
        </div>
      </div>
  )
}