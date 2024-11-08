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
        <div className="relative bg-[#9538E2] rounded-xl md:min-h-[680px] md:mb-96 mb-48 mt-4">
          <div className="text-center md:py-32 py-28 text-white">
            <div className="">
              <h1 className="md:text-5xl text-4xl font-bold md:px-24 md:whitespace-normal whitespace-break-spaces md:pt-4 ">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="text-base md:py-6 py-5 md:px-60 px-10">
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
              className="max-w-[90%] max-h-[88%] absolute z-10 border-4 border-white backdrop-blur-xl bg-white/30 p-5 md:right-52 right-4 md:-bottom-[48%] -bottom-[30%] rounded-lg"
            />
          </div>
        </div>
        <div>
          <h2 className="md:text-5xl text-4xl py-4 text-center font-bold text-[#9538E2]">
            Explore Cutting-Edge Gadgets
          </h2>
        </div>

        <div className="flex md:flex-row flex-col gap-8 py-8">
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
