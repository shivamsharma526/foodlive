import { useContext } from 'react'
import {CardsContext} from '../ContextApi'
import RecipeCardItem from '../components/RecipeCardItem'
const Favorites = () => {

  const [recipes,userlikedRecipes , setLikedRecipes] = useContext(CardsContext)
const fillikes =  recipes.filter(e=> userlikedRecipes.includes(e.id))
const ui =    fillikes.map((r, i) => (
            <RecipeCardItem key={i} recipe={r} />
          ))
return (
    <div className='px-5 py-2'>
<h1 className='text-5xl capitalize font-bold text-gray-700'>Favorites food🍕</h1>
  <div className="grid grid-cols-4 gap-4 p-2 mt-5">
        {ui}
        </div>
    </div>
  )
}

export default Favorites