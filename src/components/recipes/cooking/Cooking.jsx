import { useState } from "react";
import CurrentlyCookingtable from "./currently-cooking/CurrentlyCookingtable";
import WantToCookTable from "./want-to-cook/WantToCookTable";
import PropTypes from "prop-types";

const Cooking = ({
  orderedRecipes,
  orderedRecipeCount,
  handleCurrentlyCooking,
}) => {
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
    <div className=" lg:w-2/5 mt-12 lg:mt-0 ">
      <div className="card bg-base-100 gap-6 lg:p-3 shadow-xl">
        <WantToCookTable
          orderedRecipes={orderedRecipes}
          orderedRecipeCount={orderedRecipeCount}
          handleCooking={handleCooking}
          handleCurrentlyCooking={handleCurrentlyCooking}
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
  handleCurrentlyCooking: PropTypes.func,
};
export default Cooking;
