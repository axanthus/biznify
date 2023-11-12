
export default function LocationCard() {
  return (
    <div className="bg-white/70 to-white   rounded-xl shadow-md p-6 min-w-min space-y-4 ">
      <h2 className="text-3xl text-black font-bold">123 Main Street, San Francisco, CA 94105</h2>
      <div className="flex flex-row gap-8 divide-black">
        <div className="flex flex-col space-y-2">
          <h3 className="text-2xl text-gray-500 font-semibold">Price | <span className="text-green-500">80/100</span></h3>
          <div>
            <p className="text-gray-700">$/sqft: $200</p>
            <p className="text-gray-700">500sqft </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-2xl text-gray-500 font-semibold">Parking | <span className="text-red-500">35/100</span></h3>
          <div>
            <p className="text-gray-700">On-street: 3</p>
            <p className="text-gray-700">Parking Lots: 5</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-2xl text-gray-500 font-semibold">Customer Traffic | <span className="text-yellow-700">60/100</span></h3>
          <div>
            <p className="text-gray-700">Total routes: 2,000</p>
          </div>
        </div>
      </div>
    </div>
  )
}