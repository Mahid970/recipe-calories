import { useState } from "react";
import CurrentlyCookingtable from "./currently-cooking/CurrentlyCookingtable";
import WantToCookTable from "./want-to-cook/WantToCookTable";
import PropTypes from "prop-types";

const Cooking = ({ orderedRecipes, orderedRecipeCount }) => {
  const [currentlyCookingRecipes, setCurrentlyCookingRecipes] = useState([]);
  const [recipeCount, setRecipeCount] = useState(0);
  const [preparingTimeCount, setPreparingTimeCount] = useState(0);
  const [caloriesCount, setCaloriesCount] = useState(0);
  const handleCooking = (currentlyCooking) => {
    setCurrentlyCookingRecipes([...currentlyCookingRecipes, currentlyCooking]);
    setRecipeCount(recipeCount + 1);
    setPreparingTimeCount(preparingTimeCount + currentlyCooking.preparing_time);
    setCaloriesCount(caloriesCount + currentlyCooking.calories);
  };
  return (
    <div className=" w-2/5 ">
      <div className="card bg-base-100 gap-6 p-3 shadow-xl">
        <WantToCookTable
          orderedRecipes={orderedRecipes}
          orderedRecipeCount={orderedRecipeCount}
          handleCooking={handleCooking}
        ></WantToCookTable>
        <hr />
        <CurrentlyCookingtable
          currentlyCookingRecipes={currentlyCookingRecipes}
          recipeCount={recipeCount}
          preparingTimeCount={preparingTimeCount}
          caloriesCount={caloriesCount}
        ></CurrentlyCookingtable>
      </div>
    </div>
  );
};
Cooking.propTypes = {
  orderedRecipes: PropTypes.array,
  orderedRecipeCount: PropTypes.number,
};
export default Cooking;
