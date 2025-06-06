import { NavLink } from "react-router"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { IoMdHelpCircle } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";

const Nav = () => {
  return (
    <div className="md:w-[300px]  bg-white-900 h-screen flex flex-col gap-2 shadow-xl capitalize bg-white sticky top-0">
      <h1 className="text-[5px] md:text-2xl text-black font-bold capitalize px-5 py-5 tracking-tighter">sheryC<small className="text-gray-900">oo</small>k</h1>
<NavLink to={"/"} className={({isActive}) =>`flex items-center text-black/50 text-2xl gap-2 duration-100 hover:bg-zinc-100 px-5 py-3 ${isActive ? "border-r-5 border-black text-black/100": ""}`}><IoHomeOutline /> <small className="text-lg hidden md:block"> Home </small></NavLink>
<NavLink to={"/explore"}  className={({isActive}) =>`flex items-center text-black/50 text-2xl gap-2 duration-100 hover:bg-zinc-100 px-5 py-3 ${isActive ? "border-r-5 border-black text-black/100": ""}`}><MdOutlineTravelExplore /> <small className="text-lg hidden md:block"> explore </small></NavLink>
<NavLink to={"/community"} className={({isActive}) =>`flex items-center text-black/50 text-2xl gap-2 duration-100 hover:bg-zinc-100 px-5 py-3 ${isActive ? "border-r-5 border-black text-black/100": ""}`}><RiUserCommunityLine /> <small className="text-lg hidden md:block"> community</small></NavLink>
<NavLink to={"/favorites"} className={({isActive}) =>`flex items-center text-black/50 text-2xl gap-2 duration-100 hover:bg-zinc-100 px-5 py-3 ${isActive ? "border-r-5 border-black text-black/100": ""}`}><GrFavorite /> <small className="text-lg hidden md:block"> favorites</small></NavLink>
<NavLink to={"/help"} className={({isActive}) =>`flex items-center text-black/50 text-2xl gap-2 duration-100 hover:bg-zinc-100 px-5 py-3 ${isActive ? "border-r-5 border-black text-black/100": ""}`}><IoMdHelpCircle />
 <small className="text-lg hidden md:block"> help</small></NavLink>
<NavLink to={"/addrecipes"} className={({isActive}) =>`flex items-center text-black/50 text-2xl gap-2 duration-100 hover:bg-zinc-100 px-5 py-3 ${isActive ? "border-r-5 border-black text-black/100": ""}`}><IoMdAddCircle />
<small className="text-lg hidden md:block">  add recipe</small></NavLink>
    </div>
  )
}

export default Nav