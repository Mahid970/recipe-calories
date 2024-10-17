import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="my-4 mx-12 ">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-3xl">Recipe Calories</a>
        </div>
        <div className="navbar-center ">
          <ul className="flex gap-12 font-semibold text-xl">
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>
        <div className="navbar-end gap-4  items-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input bg-gray-100 rounded-full font-bold  w-28 md:w-auto"
            />
          </div>

          <div className=" bg-green-500 p-2 rounded-full">
            <CgProfile className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
