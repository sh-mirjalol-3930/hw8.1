import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Layout from "../pages/layout/Layout";
import Blog from "../pages/blog/Blog";
import Favorites from "../pages/favorites/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ]
  }
]);
