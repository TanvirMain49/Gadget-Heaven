import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Toaster></Toaster>
      {/* Nav-bar component */}
      <div>
        <Navbar></Navbar>
      </div>
      {/*Dynamic*/}
      <Outlet></Outlet>
      {/* footer component */}
    </div>
  );
};

export default MainLayout;
