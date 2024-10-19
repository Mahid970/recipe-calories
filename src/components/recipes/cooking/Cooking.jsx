import WantToCookTable from "./want-to-cook/WantToCookTable";
import PropTypes from "prop-types";

const Cooking = ({ orderedRecipes, orderedRecipeCount }) => {
  return (
    <div className=" w-2/5 ">
      <div className="card bg-base-100 p-3 shadow-xl">
        <WantToCookTable
          orderedRecipes={orderedRecipes}
          orderedRecipeCount={orderedRecipeCount}
        ></WantToCookTable>
      </div>
    </div>
  );
};
Cooking.propTypes = {
  orderedRecipes: PropTypes.array,
  orderedRecipeCount: PropTypes.number,
};
export default Cooking;
