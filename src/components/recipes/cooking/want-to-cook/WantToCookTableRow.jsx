import PropTypes from "prop-types";
const WantToCookTableRow = ({ orderedRecipe, idx, handleCooking }) => {
  const { recipe_name, preparing_time, calories } = orderedRecipe;
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
      <td>
        <button
          onClick={() => {
            handleCooking(orderedRecipe);
          }}
          className="bg-green-500 py-2 px-4 rounded-full text-black  font-bold"
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};
WantToCookTableRow.propTypes = {
  orderedRecipe: PropTypes.object,
  idx: PropTypes.number,
  handleCooking: PropTypes.func,
};
export default WantToCookTableRow;
