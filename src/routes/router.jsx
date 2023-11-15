import { createBrowserRouter } from "react-router-dom";


import OurKitchen from "../pages/OurKitchen/OurKitchen";
import OurMenu from "../pages/OurMenu/OurMenu";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";


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
    element: <Dashboard/>,
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart/>
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
