import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Pages/Footer";
const MainLayout = () => {
  return (
    <div>
      <div className="md:w-10/12 md:mx-auto mx-3">
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
