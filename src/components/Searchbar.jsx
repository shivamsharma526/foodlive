import { CiSearch } from "react-icons/ci";
import { CardsContext } from "../ContextApi";
import { useContext } from "react";
useContext
const Searchbar = () => {
  const [, , , ,searchTerm, setSearchTerm ] = useContext(CardsContext);

  return (
    <div className="flex w-full h-15 rounded-2xl  bg-white shadow-md my-3 relative">
        <input type="text" value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} id="" placeholder="what do you want to cook today?" className="w-full border-none outline-none ps-10 text-xl text-black/50 tracking-tighter"/>
     <p className="absolute top-1/2 -translate-1/2 left-5 text-2xl text-black font-bold"><CiSearch /></p>
      </div>
  )
}

export default Searchbar