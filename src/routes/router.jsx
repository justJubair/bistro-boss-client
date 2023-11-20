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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
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
      },
      {
        path: "/dashboard/payment",
        element: <Payment/>
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory/>
      },
      // admin only routes
      {
        path: "/dashboard/users",
        element: <AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path: "/dashboard/addItems",
        element: <AdminRoute><AddItem/></AdminRoute>
      },
      {
        path: "/dashboard/manageItems",
        element: <AdminRoute><ManageItem/></AdminRoute>
      },
      {
        path: "/dashboard/updateItem/:id",
        loader: ({params})=> fetch(`http://localhost:5000/api/v1/menus/${params.id}`),
        element: <AdminRoute><UpdateItem/></AdminRoute>
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
