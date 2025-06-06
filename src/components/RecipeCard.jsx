import RecipeCardItem from "./RecipeCardItem";
import { useContext } from "react";
import { CardsContext } from "../ContextApi";

const RecipeCard = () => {
  const [recipe] = useContext(CardsContext);

  const renderSection = (title, subtitle, type) => {
    const filtered = recipe.filter((item) => item.type === type);

    return (
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800 capitalize">
              {title}
            </h1>
            <p className="text-gray-500 font-bold capitalize mt-1">{subtitle}</p>
          </div>
          <button className="text-black font-bold capitalize">More</button>
        </div>

        <div className="grid grid-cols-4 gap-4 p-2">
          {filtered.map((r, i) => (
            <RecipeCardItem key={i} recipe={r} />
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
