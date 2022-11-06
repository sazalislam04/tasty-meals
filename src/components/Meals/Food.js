import React from "react";
import { Link } from "react-router-dom";

const Food = ({ meal }) => {
  const { strMeal, price, strCategory, strMealThumb, _id } = meal;
  return (
    <div className="card w-96 rounded-md bg-base-100 shadow-xl">
      <div className="column food">
        <figure>
          <img
            className="h-80 shadow-xl w-[350px]"
            src={strMealThumb}
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{strMeal}</h2>
          <h2 className="bg-gray-200 px-2 text-gray-900 rounded ">
            {strCategory}
          </h2>
        </div>
        <p className="text-2xl">Price: {price}$</p>
        <div className="card-actions justify-end">
          <Link to={`/food/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
