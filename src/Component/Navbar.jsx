import { NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const Navbar = () => {
  const location = useLocation();
  const navLocation = location.pathname;

  const navbarClass =
    navLocation === "/" || navLocation.startsWith("/cards")
      ? "text-white absolute z-50 w-[70%] md:ml-24 top-10 rounded-lg"
      : "bg-transparent md:mt-5 mt-3 md:pr-0 pr-28";
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-[#9538E2] text-white font-bold p-2 mr-2 rounded-lg"
            : "bg-transparent text-black font-bold p-2 mr-2 rounded-lg"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/statistic"
        className={({ isActive }) =>
          isActive
            ? "bg-[#9538E2] text-white font-bold p-2 mr-2 rounded-lg"
            : "bg-transparent text-black font-bold p-2 mr-2 rounded-lg"
        }
      >
        Statistic
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "bg-[#9538E2] text-white font-bold p-2 mr-2 rounded-lg"
            : "bg-transparent text-black font-bold p-2 mr-2 rounded-lg"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/Reviews"
        className={({ isActive }) =>
          isActive
            ? "bg-[#9538E2] text-white font-bold p-2 mr-2 rounded-lg"
            : "bg-transparent text-black font-bold p-2 mr-2 rounded-lg"
        }
      >
        Review
      </NavLink>
    </>
  );

  return (
    <div className={`navbar ${navbarClass}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
          >
            {links}
          </ul>
        </div>
        <a className="text-lg font-bold whitespace-nowrap">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4">{links}</ul>
      </div>
      <div className="navbar-end md:gap-4 gap-2 md:ml-0 ml-32 relative">
        <NavLink
          to="/dashboard/product-cart"
          className="btn md:p-2 rounded-full md:text-2xl text-xl md:w-[14%] "
        >
          <CiShoppingCart />
        </NavLink>
        <NavLink
          to="/dashboard/wish-cart"
          className="btn md:p-2 rounded-full md:text-2xl text-xl md:w-[14%]"
        >
          <CiHeart></CiHeart>
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
