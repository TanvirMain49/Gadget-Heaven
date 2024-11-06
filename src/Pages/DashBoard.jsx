import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div className="bg-[#9538E2] rounded-xl pb-12">
        <div className="text-center text-white">
          <div className="">
            <h1 className="text-4xl font-bold px-24 pt-8">Product Details</h1>
            <p className="text-base py-6 px-60">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <NavLink
              to="/dashboard/product-cart"
              className={({ isActive }) =>
                isActive
                  ? "btn rounded-full text-[#9538E2] bg-white font-bold w-[10%]"
                  : "btn rounded-full text-white bg-[#9538E2] font-bold w-[10%]"
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/dashboard/wish-cart"
              className={({ isActive }) =>
                isActive
                  ? "btn rounded-full text-[#9538E2] bg-white font-bold w-[10%]"
                  : "btn rounded-full text-white bg-[#9538E2] font-bold w-[10%]"
              }
            >
              Wishes
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
// btn rounded-full text-[#9538E2] bg-white font-bold w-[10%]
export default DashBoard;
