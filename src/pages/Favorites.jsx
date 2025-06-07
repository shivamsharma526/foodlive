import { useContext } from 'react'
import {CardsContext} from '../ContextApi'
import RecipeCardItem from '../components/RecipeCardItem'
const Favorites = () => {

  const [recipes,_,userlikedRecipes , setLikedRecipes] = useContext(CardsContext)
const fillikes =  recipes.filter(e=> userlikedRecipes.includes(e.id))
  return (
    <div className='px-5 py-2'>
      <h1 className='text-5xl capitalize font-bold text-gray-700'>Favorites food🍕</h1>

      {fillikes.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 p-2 mt-5">
          {fillikes.map((r, i) => (
            <RecipeCardItem key={i} recipe={r} />
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-xl mt-10 text-center">
          🥲 You haven’t liked any recipes yet. <br /> Go back and explore some tasty dishes!
        </div>
      )}
    </div>
  )
}

export default Favorites