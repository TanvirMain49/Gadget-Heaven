import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import DashBoard from "../Pages/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/statistics',
            element: <Statistics></Statistics>
        },
        {
            path:'/dashboard',
            element: <DashBoard></DashBoard>
        },
      ]
    },
  ]);

  export default router;