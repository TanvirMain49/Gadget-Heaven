/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const AllCategories = ({ categoryTabs }) => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center border-2 gap-4 p-7 rounded-xl">
          {categoryTabs.map((categoryTab) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#9538E2] text-white font-bold p-2 mr-2 rounded-lg btn w-[95%]"
                  : "bg-transparent text-black font-bold p-2 mr-2 rounded-lg btn w-[95%]"
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
