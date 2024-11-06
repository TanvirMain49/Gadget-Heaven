import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Component/Footer";
const MainLayout = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <Toaster></Toaster>
        {/* Nav-bar component */}
        <div>
          <Navbar></Navbar>
        </div>
        {/*Dynamic*/}
        <Outlet></Outlet>
      </div>
      {/* footer component */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
