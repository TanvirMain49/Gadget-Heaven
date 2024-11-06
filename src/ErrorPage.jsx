import { NavLink } from "react-router-dom";

export function ErrorPage() {
  return (
      <div className="h-screen mx-auto grid place-items-center text-center px-8">
        <div>
            <img src='https://i.ibb.co.com/6vJ1h1R/Pngtree-404-error-page-not-found-5276232.png' alt="" className="h-96" />
        </div>
            <h1 className="text-2xl font-bold">Looks like The page you search is Not found</h1>
          <NavLink color="gray" to='/' className="btn w-full px-4 md:w-[8rem] font-bold">
            back home
          </NavLink>
        </div>
      
  );
}

export default ErrorPage;