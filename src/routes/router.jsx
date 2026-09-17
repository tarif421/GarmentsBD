import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts.jsx";
import HomePage from "../Home/Layout/HomePage.jsx";
import AllProducts from "../Products/AllProducts.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import Login from "../Auth/Login.jsx";
import Register from "../Auth/Register.jsx";
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

  {

  path: '/',
  Component: AuthLayout,
  children: [
    {
      path: '/login',
      Component: Login,
    },
    {
      path: '/register',
      Component: Register,
    },
  ]
  },
]);
