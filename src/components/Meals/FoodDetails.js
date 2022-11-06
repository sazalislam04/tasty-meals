import React from "react";
import { FaRegHandPointRight, FaShoppingBag } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const FoodDetails = () => {
  const {
    strMeal,
    price,
    strInstructions,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
  } = useLoaderData();

  return (
    <div className="food-container">
      <div className="border-2">
        <img
          className="h-[400px] w-full object-cover"
          src={strMealThumb}
          alt=""
        />
        <div className="px-6 lg:px-20 py-10">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl">{strMeal}</h2>
            <button className="cart-btn">
              <span>Add to Cart</span>
              <p className="hidden text-orange-500">
                <FaShoppingBag />
              </p>
            </button>
          </div>
          <p className="text-xl mt-2 mb-2 text-red-500">Price: {price}$</p>
          <hr />
          <p className="mt-5 text-2xl">Food Info</p>
          <div className="flex items-center">
            <ul className="mt-2 mr-20">
              <li className="flex items-center">
                <span className="mr-2">
                  <FaRegHandPointRight />
                </span>{" "}
                {strIngredient1}
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaRegHandPointRight />
                </span>{" "}
                {strIngredient2}
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaRegHandPointRight />
                </span>{" "}
                {strIngredient3}
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaRegHandPointRight />
                </span>{" "}
                {strIngredient4}
              </li>
            </ul>
            <ul className="mt-2">
              <li className="flex items-center">
                <span className="mr-2">
                  <FaRegHandPointRight />
                </span>{" "}
                {strIngredient5}
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaRegHandPointRight />
                </span>{" "}
                {strIngredient6}
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaRegHandPointRight />
                </span>{" "}
                {strIngredient7}
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <FaRegHandPointRight />
                </span>{" "}
                {strIngredient8}
              </li>
            </ul>
          </div>
          <p className="mt-5">{strInstructions}</p>
        </div>
      </div>
      {/* cart */}
      <Cart strMealThumb={strMealThumb} price={price} />
    </div>
  );
};

export default FoodDetails;
