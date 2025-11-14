import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);
