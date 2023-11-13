import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/HomePage/Home/Home";

import OurKitchen from "../pages/OurKitchen/OurKitchen";
import OurMenu from "../pages/OurMenu/OurMenu";


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
]);

export default router;
