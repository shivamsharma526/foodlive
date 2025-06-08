import  { useEffect , useContext } from 'react'
import Searchbar from '../components/Searchbar'
import { GiSurprisedSkull } from "react-icons/gi";
import { LuDessert } from "react-icons/lu";
import { GiIndianPalace } from "react-icons/gi";
import { GiItalia } from "react-icons/gi";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { NavLink, Outlet, useNavigate } from 'react-router';
import { CardsContext } from '../ContextApi';
import RecipeCardIteam from '../components/RecipeCardItem';
const Explore = () => {
const navigate = useNavigate()



const exp = (e)=>{
  const text = e.target.innerText.toLowerCase().trim().replace(/\s+/g, '-');
    if (text === 'all') {
    navigate('/explore'); // ✅ NO /all in route
  } else {
    navigate(`/explore/${e.target.innerText}`);
  }
}


const [recipes, , , , searchTerm] = useContext(CardsContext);

  const filteredRecipes = searchTerm.trim() === ""
    ? null
    : recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );



  return (
    <div className='px-5'>
<Searchbar/>

<div className="flex gap-1 sticky top-15 z-10 bg-white px-2 py-5">
  <p className='bg-gray-900 px-3 rounded-2xl py-1 text-white capitalize font-semibold flex items-center gap-0.5 cursor-pointer select-none' onClick={(e)=>exp(e)}><GiSurprisedSkull className='pointer-events-none'/>all</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold flex items-center gap-0.5 cursor-pointer select-none' onClick={(e)=>exp(e)}><LuDessert className='pointer-events-none'/>dessert</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold flex items-center gap-0.5 cursor-pointer select-none' onClick={(e)=>exp(e)}><GiItalia className='pointer-events-none'/> italian</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold flex items-center gap-0.5 cursor-pointer select-none' onClick={(e)=>exp(e)}> <GiIndianPalace className='pointer-events-none'/>indian</p>
  <p className='bg-black/4 px-3 rounded-2xl py-1 text-black capitalize font-semibold flex items-center gap-0.5 cursor-pointer select-none' onClick={(e)=>exp(e)}><HiGlobeAsiaAustralia className='pointer-events-none'/>asian</p>
</div>

 {
        filteredRecipes ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
            {filteredRecipes.map(recipe => (
              <RecipeCardIteam key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <Outlet />
        )
      }
    </div>
  )
}

export default Explore