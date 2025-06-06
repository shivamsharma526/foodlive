import React from 'react'
import Searchbar from '../components/Searchbar'
const Explore = () => {
  return (
    <div className='px-5'>
<Searchbar/>

<div className="flex gap-1">
  <p className='bg-red-300 px-3 rounded-2xl py-1 text-white capitalize font-semibold'>surprise me</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold'>dessert</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold'>italian food</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold'>indian food</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold'>asian food</p>
</div>
    </div>
  )
}

export default Explore