import Searchbar from "../components/Searchbar";
import RecipeCard from "../components/RecipeCard";
import { CardsContext } from "../ContextApi";
import { useContext } from "react";

const Home = () => {
  const [recipes, , , , searchTerm] = useContext(CardsContext);

  const filteredRecipes = searchTerm.trim() === ""
    ? null
    : recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <div className="px-5">
      <Searchbar />
      <RecipeCard recipes={filteredRecipes} />
    </div>
  );
};

export default Home;
