import PropTypes from "prop-types";
const CurrentlyCookingtableRow = ({ currentlyCookingRecipe, idx }) => {
  const { recipe_name, preparing_time, calories } = currentlyCookingRecipe;
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
    </tr>
  );
};
CurrentlyCookingtableRow.propTypes = {
  currentlyCookingRecipe: PropTypes.object,
  idx: PropTypes.number,
};
export default CurrentlyCookingtableRow;
