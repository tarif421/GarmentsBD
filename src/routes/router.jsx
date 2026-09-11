import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts.jsx";
import HomeLayout from "../Home/HomeLayout.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    Children: [
      {
        index: true,
        Component: HomeLayout,
      },
    ],
  },
]);
