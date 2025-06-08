import RecipeCardItem from "./RecipeCardItem";
import { useContext } from "react";
import { CardsContext } from "../ContextApi";

const RecipeCard = ({ recipes }) => {
  const [allRecipes] = useContext(CardsContext);

  // If 'recipes' prop is passed, render only those recipes (search results)
  if (recipes) {
    if (recipes.length === 0) {
      return <p className="mt-10 text-center text-gray-600">No recipes found</p>;
    }
    return (
      <div className="mt-10 grid grid-cols-4 gap-4 p-2">
        {recipes.map((r) => (
          <RecipeCardItem key={r.id} recipe={r} />
        ))}
      </div>
    );
  }

  // Otherwise render grouped sections as before
  const renderSection = (title, subtitle, type) => {
    const filtered = allRecipes.filter((item) => item.type === type);
    return (
      <div className="mt-10" key={type}>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-sm md:text-4xl font-semibold text-gray-800 capitalize">
              {title}
            </h1>
            <p className="text-gray-500 font-bold capitalize mt-1 text-[10px] md:text-2xl">{subtitle}</p>
          </div>
          <button className="text-black font-bold capitalize text-sm md:text-xl">More</button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 md:p-2 mt-5 md:mt-0">
          {filtered.map((r) => (
            <RecipeCardItem key={r.id} recipe={r} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {renderSection("Recommended Recipes", "based on your preferences", "recommended")}
      {renderSection("Trending Recipes", "cooked by people with similar preferences", "trending")}
      {renderSection("More Recipes", "more similar preferences", "more")}
    </>
  );
};

export default RecipeCard;
