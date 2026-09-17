import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts.jsx";
import HomePage from "../Home/Layout/HomePage.jsx";
import AllProducts from "../Products/AllProducts.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/allProducts",
        Component: AllProducts,
      },
    ],
  },
]);
