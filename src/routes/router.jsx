import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/HomePage/Home/Home";
import OurMenu from "../pages/OurMenuPage/OurMenu/OurMenu";


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
      }
    ],
  },
]);

export default router;
