import {  Outlet, useLoaderData, useNavigate } from "react-router-dom";
import AllCategories from "../Component/AllCategories";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  const categoryTabs = useLoaderData();
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title> Gadget || Gadget Haven</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div className="relative bg-[#9538E2] rounded-xl min-h-[680px] mb-96 mt-4">
          <div className="text-center py-32 text-white">
            <div className="">
              <h1 className="text-5xl font-bold px-24 pt-4">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="text-base py-6 px-60">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <button
                onClick={() => navigate("/dashboard")}
                className="btn rounded-full text-[#9538E2] bg-white font-bold"
              >
                Shop now
              </button>
            </div>
          </div>
          <div className="max-h-[56%]">
            <img
              src="/assets/banner.jpg"
              alt=""
              className="max-w-[90%] max-h-[88%] absolute z-10 border-4 border-white backdrop-blur-xl bg-white/30 p-5 right-52 -bottom-[48%] rounded-lg"
            />
          </div>
        </div>
        <div>
          <h2 className="text-5xl py-4 text-center font-bold text-[#9538E2]">
            Explore Cutting-Edge Gadgets
          </h2>
        </div>

        <div className="flex gap-8 py-8">
          <AllCategories categoryTabs={categoryTabs.categories}></AllCategories>
          {/* dynamic layout */}
          <Outlet></Outlet>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
// bg-[#9538E2]
