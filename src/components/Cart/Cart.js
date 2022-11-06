import React from "react";

const Cart = ({ strMealThumb, price }) => {
  return (
    <div className="px-4">
      <div className="text-center mt-10">
        <h1 className="text-2xl mb-2">Your Cart</h1>
        <p>Start adding items to your cart</p>
      </div>
      <div className="mt-14">
        <hr />
        <div className="mt-8">
          <div className="flex mt-5 items-center justify-between px-4 border rounded p-2">
            <img className="h-16 w-16" src={strMealThumb} alt="" />
            <p>
              $ <span>{price}</span>
            </p>
          </div>
          <div className="text-center mt-14">
            <button className="btn btn-primary">Go To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
