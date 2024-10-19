import { useState } from "react";

import Cooking from "./cooking/cooking";
import LoadRecipeData from "./recipe-card/LoadRecipeData";
import RecipesTitle from "./recipesTitle";
import { toast, ToastContainer } from "react-toastify";

const Recipes = () => {
  const [orderedRecipes, setOrderedRecipes] = useState([]);
  const [orderedRecipeCount, setOrderdRecipeCount] = useState(0);
  const handleWantToCook = (addedRecipe) => {
    const newRecipes = orderedRecipes.filter(
      (newRecipes) => newRecipes.recipe_id == addedRecipe.recipe_id
    );
    if (newRecipes.length === 0) {
      setOrderdRecipeCount(orderedRecipeCount + 1);
      setOrderedRecipes([...orderedRecipes, addedRecipe]);
    } else {
      toast.error("You have already added this recipe");
    }
  };
  const handleCurrentlyCooking = (currentlyCooking) => {
    const newOrderedRecipes = orderedRecipes.filter(
      (newOrderedRecipes) =>
        newOrderedRecipes.recipe_id !== currentlyCooking.recipe_id
    );
    setOrderedRecipes(newOrderedRecipes);
    setOrderdRecipeCount(orderedRecipeCount - 1);
  };
  return (
    <div>
      <RecipesTitle></RecipesTitle>
      <div className="flex mx-12 gap-12 ">
        <LoadRecipeData handleWantToCook={handleWantToCook}></LoadRecipeData>
        <ToastContainer autoClose={2000}></ToastContainer>
        <Cooking
          orderedRecipes={orderedRecipes}
          orderedRecipeCount={orderedRecipeCount}
          handleCurrentlyCooking={handleCurrentlyCooking}
        ></Cooking>
      </div>
    </div>
  );
};

export default Recipes;
