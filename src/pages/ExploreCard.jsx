import  { useContext } from 'react'
import { useParams } from 'react-router'
import { CardsContext } from '../ContextApi';
import RecipeCardItem from '../components/RecipeCardItem';
const exploreCard = () => {
     const { name } = useParams();
  const selectedCategory = ( name || 'all').toLowerCase();
   
    const [recipe] = useContext(CardsContext);
  
 // Filter logic
  const filteredRecipes = selectedCategory === 'all'
    ? recipe
    : recipe.filter(recipe =>
         recipe.name.toLowerCase().includes(selectedCategory) ||
        recipe.from.toLowerCase().includes(selectedCategory) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(selectedCategory))
      );



  return (
    <div className='mt-3'>
   {filteredRecipes.length > 0 ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 md:p-2 mt-5 md:mt-5">
          {filteredRecipes.map((r, i) => (
            <RecipeCardItem key={i} recipe={r} />
          ))}
        </div>
      ) : (
        <div className="text-gray-500 md:text-xl mt-10 text-center">
          🥲 You haven’t  recipes yet. <br className='hidden md:block'/> Go back and explore some tasty dishes!
        </div>
      )}
    </div>
  )
}

export default exploreCard