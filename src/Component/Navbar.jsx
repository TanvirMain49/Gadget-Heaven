import { Link } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to='/' className="font-bold">Home</Link>
      </li>
      <li>
        <Link to='/statistics' className="font-bold">Statistics</Link>
      </li>
      <li>
        <Link to='/dashboard' className="font-bold">Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent">
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
        <a className="text-lg font-bold">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn p-2 rounded-full text-2xl"><CiShoppingCart /></a>
        <a className="btn p-2 rounded-full text-2xl"><CiHeart></CiHeart></a>
      </div>
    </div>
  );
};

export default Navbar;
