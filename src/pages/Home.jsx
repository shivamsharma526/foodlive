import Searchbar from "../components/Searchbar";

import RecipeCard from "../components/RecipeCard";
const Home = () => {

  return (
    <div className="px-5">
    <Searchbar/>
      <RecipeCard/>
    </div>
  );
};

export default Home;
