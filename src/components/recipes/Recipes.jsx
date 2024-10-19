import LoadRecipeData from "./recipe-card/LoadRecipeData";
import RecipesTitle from "./recipesTitle";

const Recipes = () => {
  return (
    <div>
      <RecipesTitle></RecipesTitle>
      <LoadRecipeData></LoadRecipeData>
    </div>
  );
};

export default Recipes;
