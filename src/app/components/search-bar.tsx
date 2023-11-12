import { GrSearch } from 'react-icons/gr'

export default function SearchBar() {
  return (
    <div className='flex flex-row p-2 w-1/2 drop-shadow-md'>
      <div className='relative w-full'>
        <p className='text-black text absolute left-12 top-4'>Where</p>
        <input className='w-full ps-12 border-none border-gray-200 text-xl text-gray-400 rounded-full p-3 py-6 pt-10' placeholder='Enter a location' />
        <button title='search' type='submit' className=' hover:bg-primary/80 active:bg-primary/90 bg-primary absolute right-4 top-2 text-white rounded-full text-2xl p-6'><GrSearch className="" /></button>
      </div>
    </div>
  )
}