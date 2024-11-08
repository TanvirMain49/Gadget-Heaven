/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const AllCategories = ({ categoryTabs }) => {
  return (
    <div>
      <div>
        <div className="md:flex md:flex-col grid grid-cols-2 justify-center items-center border-2 md:gap-4 gap-3 md:p-7 p-5 rounded-xl">
          {categoryTabs.map((categoryTab) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#9538E2] text-white font-bold p-2 mr-2 rounded-lg btn w-[95%] hover:bg-[#9538E2] hover:text-white hover:font-bold"
                  : "bg-transparent text-black font-bold p-2 mr-2 rounded-lg btn w-[95%] hover:bg-black hover:text-white hover:font-bold hover:scale-105 transition-all ease-in duration-150"
              }
              key={categoryTab.id}
              to={`/cards/${categoryTab.category}`}
            >
              {categoryTab.category}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
