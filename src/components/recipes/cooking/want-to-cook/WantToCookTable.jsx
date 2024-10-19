import PropTypes from "prop-types";
import WantToCookTableRow from "./WantToCookTableRow";
const WantToCookTable = ({
  orderedRecipes,
  orderedRecipeCount,
  handleCooking,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Want to cook: {orderedRecipeCount}
      </h1>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {orderedRecipes.map((orderedRecipe, idx) => (
              <WantToCookTableRow
                idx={idx}
                key={orderedRecipe.recipe_id}
                orderedRecipe={orderedRecipe}
                handleCooking={handleCooking}
              ></WantToCookTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
WantToCookTable.propTypes = {
  orderedRecipes: PropTypes.array,
  orderedRecipeCount: PropTypes.number,
  handleCooking: PropTypes.func,
};
export default WantToCookTable;
