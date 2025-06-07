import React from 'react'
import Searchbar from '../components/Searchbar'
import { GiSurprisedSkull } from "react-icons/gi";
import { LuDessert } from "react-icons/lu";
import { GiIndianPalace } from "react-icons/gi";
import { GiItalia } from "react-icons/gi";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";


const Explore = () => {
  return (
    <div className='px-5'>
<Searchbar/>

<div className="flex gap-1">
  <p className='bg-gray-900 px-3 rounded-2xl py-1 text-white capitalize font-semibold flex items-center gap-0.5'><GiSurprisedSkull />surprise me</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold flex items-center gap-0.5'><LuDessert />dessert</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold flex items-center gap-0.5'><GiItalia /> italian food</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold flex items-center gap-0.5'> <GiIndianPalace /> indian food</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold flex items-center gap-0.5'><HiGlobeAsiaAustralia /> asian food</p>
</div>


    </div>
  )
}

export default Explore