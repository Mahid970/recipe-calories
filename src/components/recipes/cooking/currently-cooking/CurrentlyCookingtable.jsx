import PropTypes from "prop-types";
import CurrentlyCookingtableRow from "./CurrentlyCookingtableRow";
const CurrentlyCookingtable = ({
  currentlyCookingRecipes,
  recipeCount,
  preparingTimeCount,
  caloriesCount,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3 text-center">
        Currently cooking: {recipeCount}
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
            {currentlyCookingRecipes.map((currentlyCookingRecipe, idx) => (
              <CurrentlyCookingtableRow
                idx={idx}
                key={currentlyCookingRecipe.recipe_id}
                currentlyCookingRecipe={currentlyCookingRecipe}
                preparingTimeCount={preparingTimeCount}
                caloriesCount={caloriesCount}
              ></CurrentlyCookingtableRow>
            ))}
            <tr className="font-bold">
              <td></td>
              <td></td>
              <td>Total Time= {preparingTimeCount} minutes</td>
              <td>Total Calories= {caloriesCount} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
CurrentlyCookingtable.propTypes = {
  currentlyCookingRecipes: PropTypes.array,
  recipeCount: PropTypes.number,
  preparingTimeCount: PropTypes.number,
  caloriesCount: PropTypes.number,
};
export default CurrentlyCookingtable;
