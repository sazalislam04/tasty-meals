import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Home from "../components/Home/Home";
import FoodDetails from "../components/Meals/FoodDetails";
import Meals from "../components/Meals/Meals";
import Orders from "../components/Orders/Orders";
import Layout from "../Layout/Layout";
import { foodLoaders } from "../Loaders/foodLoaders";

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
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/city/:city",
        element: <Meals />,
      },
      {
        path: "/food/:foodId",
        element: <FoodDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: foodLoaders,
      },
    ],
  },
]);
