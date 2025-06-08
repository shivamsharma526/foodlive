import { CiSearch } from "react-icons/ci";
import { CardsContext } from "../ContextApi";
import { useContext } from "react";
useContext
const Searchbar = () => {
  const [, , , ,searchTerm, setSearchTerm ] = useContext(CardsContext);

  return (
    <div className="flex w-full h-10 md:h-15 rounded-2xl  bg-white shadow-md my-3 sticky top-0 z-10">
        <input type="text" value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} id="" placeholder="what do you want to cook today?" className="w-full border-none outline-none ps-8 md:ps-10 text-sm md:text-xl text-black/50 tracking-tighter "/>
     <p className="absolute top-1/2 -translate-1/2 left-5 text-md md:text-2xl text-black font-bold"><CiSearch /></p>
      </div>
  )
}

export default Searchbar