import { useState } from "react";

import Cooking from "./cooking/cooking";
import LoadRecipeData from "./recipe-card/LoadRecipeData";
import RecipesTitle from "./recipesTitle";

const Recipes = () => {
  const [orderedRecipes, setOrderedRecipes] = useState([]);
  const [orderedRecipeCount, setOrderdRecipeCount] = useState(0);
  const handleWantToCook = (addedRecipe) => {
    setOrderedRecipes([...orderedRecipes, addedRecipe]);
    setOrderdRecipeCount(orderedRecipeCount + 1);
  };

  return (
    <div>
      <RecipesTitle></RecipesTitle>
      <div className="flex mx-12 gap-12 ">
        <LoadRecipeData handleWantToCook={handleWantToCook}></LoadRecipeData>
        <Cooking
          orderedRecipes={orderedRecipes}
          orderedRecipeCount={orderedRecipeCount}
        ></Cooking>
      </div>
    </div>
  );
};

export default Recipes;
