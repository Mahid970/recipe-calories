import PropTypes from "prop-types";
import { IoIosTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
const ShowRecipeCard = ({ recipe, handleWantToCook }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card bg-base-100 p-6  shadow-xl gap-4">
        <figure className="">
          <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <h2 className="card-title font-bold">{recipe_name}</h2>
        <p>{short_description}</p>
        <hr />

        <h2 className="text-xl font-bold">Ingredients: {ingredients.length}</h2>

        <div>
          {ingredients.map((ingredient, idx) => (
            <li className="pl-3 " key={idx}>
              {ingredient}
            </li>
          ))}
        </div>
        <hr />
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <IoIosTime />
            <p>{preparing_time} minutes</p>
          </div>
          <div className="flex items-center gap-2">
            <FaFire />
            <p>{calories} calories</p>
          </div>
        </div>
        <button
          onClick={() => {
            handleWantToCook(recipe);
          }}
          className="bg-green-500 py-3 px-6 rounded w-full text-black  font-bold"
        >
          Want to cook
        </button>
      </div>
    </div>
  );
};

ShowRecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func,
};

export default ShowRecipeCard;
