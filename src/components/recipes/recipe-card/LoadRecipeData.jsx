import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import ShowRecipeCard from "./ShowRecipeCard";

const LoadRecipeData = ({ handleWantToCook }) => {
  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => {
    fetch("/public/recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipeData(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-2  gap-8 lg:w-3/5">
      {recipeData.map((recipe) => (
        <ShowRecipeCard
          key={recipe.recipe_id}
          handleWantToCook={handleWantToCook}
          recipe={recipe}
        ></ShowRecipeCard>
      ))}
    </div>
  );
};
LoadRecipeData.propTypes = {
  handleWantToCook: PropTypes.func,
};
export default LoadRecipeData;
