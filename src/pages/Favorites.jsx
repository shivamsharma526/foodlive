import { useContext } from 'react'
import {CardsContext} from '../ContextApi'
import RecipeCardItem from '../components/RecipeCardItem'
const Favorites = () => {

  const [recipes,_,userlikedRecipes , setLikedRecipes] = useContext(CardsContext)
const fillikes =  recipes.filter(e=> userlikedRecipes.includes(e.id))
  return (
    <div className='px-5 py-2'>
      <h1 className='md:text-5xl capitalize font-bold text-gray-700'>Favorites food🍕</h1>

      {fillikes.length > 0 ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 md:p-2 mt-5 md:mt-5">
          {fillikes.map((r, i) => (
            <RecipeCardItem key={i} recipe={r} />
          ))}
        </div>
      ) : (
        <div className="text-gray-500 md:text-xl mt-10 text-center">
          🥲 You haven’t liked any recipes yet. <br className='hidden md:block'/> Go back and explore some tasty dishes!
        </div>
      )}
    </div>
  )
}

export default Favorites