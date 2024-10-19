import PropTypes from "prop-types";
const WantToCookTableRow = ({ orderedRecipe, idx }) => {
  const { recipe_name, preparing_time, calories } = orderedRecipe;
  return (
    <tr>
      <th>{idx}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
      <td>
        <button className="bg-green-500 py-2 px-4 rounded-full text-black  font-bold">
          Preparing
        </button>
      </td>
    </tr>
  );
};
WantToCookTableRow.propTypes = {
  orderedRecipe: PropTypes.object,
  idx: PropTypes.number,
};
export default WantToCookTableRow;
