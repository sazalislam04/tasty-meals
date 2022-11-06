import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Meals from "../components/Meals/Meals";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/city/:city",
        element: <Meals />,
      },
    ],
  },
]);
