import { useEffect } from "react";
import { useState } from "react";
import ShowRecipeCard from "./ShowRecipeCard";

const LoadRecipeData = () => {
  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => {
    fetch("/public/recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipeData(data));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-8 w-3/5">
      {recipeData.map((recipe) => (
        <ShowRecipeCard key={recipe.recipe_id} recipe={recipe}></ShowRecipeCard>
      ))}
    </div>
  );
};

export default LoadRecipeData;
