import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import DashBoard from "../Pages/DashBoard";
import CategoryCards from "../Component/CategoryCards";
import CardDetails from "../Component/CardDetails";
import DashCart from "../Component/DashCart";
import WishCart from "../Pages/WishCart";
import Review from "../Pages/Review";
import ErrorPage from "../ErrorPage";
import Statistic from "../Pages/Statistic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Category.json"),
        children: [
          {
            path: "/",
            element: <CategoryCards></CategoryCards>,
            loader: () => fetch("/CategoriesData.json"),
          },
          {
            path: "/cards/:category",
            element: <CategoryCards></CategoryCards>,
            loader: () => fetch("/CategoriesData.json"),
          },
        ],
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: "/Reviews",
        element: <Review></Review>,
        loader: () => fetch("/review.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        children: [
          {
            path: "/dashboard/",
            element: <DashCart></DashCart>,
          },
          {
            path: "/dashboard/product-cart",
            element: <DashCart></DashCart>,
          },
          {
            path: "/dashboard/wish-cart",
            element: <WishCart></WishCart>,
          },
        ],
      },
      {
        path: "/card-Details/:productId",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("/CategoriesData.json"),
      },
    ],
  },
]);

export default router;
