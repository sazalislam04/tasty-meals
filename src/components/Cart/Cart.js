import React from "react";

const Cart = ({ singleCrt }) => {
  const { strMealThumb, price } = singleCrt;

  return (
    <div className="px-4">
      <div className="mt-8">
        <div className="flex mt-5 items-center justify-between px-4 border rounded p-2">
          <img className="h-16 w-16" src={strMealThumb} alt="" />
          <p>
            $<span>{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
