
export default function LocationCard({location, onClick}: {location: { title: string, onClick: () => void }}) {
  return (
    <div onClick={onClick} className="bg-white/70 to-white  cursor-pointer  rounded-xl shadow-md p-6 min-w-min space-y-4 ">
      <h2 className="text-3xl text-black font-bold">{location.address}, San Francisco, CA {location.postalCode}</h2>
      <div className="flex flex-row gap-8 divide-black">
        <div className="flex flex-col space-y-2">
          <h3 className="text-2xl text-gray-500 font-semibold">Price | <span className="text-green-500">80/100</span></h3>
          <div>
            <p className="text-gray-700">{location.floorSizeValue} sqft.</p>
            <p className="text-gray-700">$/sqft: ${location.pricerPerSquareFoot}</p>
            <p className="text-gray-700">Montly Rent: {location.mostRecentPriceAmount} </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-2xl text-gray-500 font-semibold">Parking | <span className="text-red-500">35/100</span></h3>
          <div>
            <p className="text-gray-700">On-street: {location.numStreetParking}</p>
            <p className="text-gray-700">Parking Lots: {location.numParkingLots}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-2xl text-gray-500 font-semibold">Customer Traffic | <span className="text-yellow-700">60/100</span></h3>
          <div>
            <p className="text-gray-700">Total routes that end in location: {location.numTripCounts}</p>
          </div>
        </div>
      </div>
    </div>
  )
}