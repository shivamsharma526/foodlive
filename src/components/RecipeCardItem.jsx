import { CiHeart, CiClock2 } from "react-icons/ci";
import { FaStar, FaWeight, FaDrumstickBite } from "react-icons/fa";
import { GiBrain, GiBodyBalance } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import { LuVegan } from "react-icons/lu";
import { useContext } from "react";
import { CardsContext } from "../ContextApi";

const tagIcons = {
  "heart healthy": <FaHeartPulse />,
  "weight loss": <FaWeight />,
  "high protein": <FaDrumstickBite />,
  "brain healthy": <GiBrain />,
  "vegetarian": <LuVegan />,
  "vegan  ": <LuVegan />,
  "low fat": <GiBodyBalance />,
};

const RecipeCardItem = ( {recipe }) => {
  const [_, __, likedRecipes, setLikedRecipes] = useContext(CardsContext);

 const isLiked = likedRecipes.includes(recipe.id);

const toggleLike = () => {
  setLikedRecipes(
    isLiked
      ? likedRecipes.filter((id) => id !== recipe.id)
      : [...likedRecipes, recipe.id]
  );
};

  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-[130px] object-cover rounded-xl"
        />
        <div
          className={`${
    isLiked ? "text-red-600" : "text-gray-500"
  } w-8 h-8 flex justify-center items-center text-xl rounded-full absolute top-2 right-2 cursor-pointer bg-white`}
          onClick={toggleLike}
        >
          <CiHeart />
        </div>
        <div className="absolute bottom-2 left-2 bg-white text-sm px-2 py-1 rounded-2xl flex items-center gap-1">
          <CiClock2 /> 55 min
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <h1 className="font-bold text-lg text-gray-800">{recipe.name}</h1>
        <p className="flex items-center gap-1 font-bold text-yellow-600">
          <FaStar /> <span className="text-black">{recipe.rating}</span>
        </p>
      </div>
      <p className="text-sm text-gray-500 font-bold">{recipe.from}</p>

      <div className="flex gap-2 mt-2 flex-wrap">
        {recipe.tags.map((tag, i) => (
          <div
            key={i}
            className="bg-gray-100 px-3 py-1 rounded-xl text-sm flex items-center gap-1"
          >
            {tagIcons[tag]} {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCardItem;
