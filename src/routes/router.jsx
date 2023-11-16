import { createBrowserRouter } from "react-router-dom";


import OurKitchen from "../pages/OurKitchen/OurKitchen";
import OurMenu from "../pages/OurMenu/OurMenu";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourMenu",
        element: <OurMenu/>
      },
      {
        path: "/ourKitchen/:selectedCategory",
        element: <OurKitchen/>
      }
    ],
    
  },
 {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      {
        path: "/dashboard/cart",
        element:<PrivateRoute> <Cart/></PrivateRoute>
      },
      {
        path: "/dashboard/addReview",
        element: <AddReview/>
      }
    ]
 },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

export default router;
