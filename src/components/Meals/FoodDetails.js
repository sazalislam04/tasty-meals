import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegHandPointRight, FaShoppingBag } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getData, setData } from "../../fakeDb/localStorage";
import Cart from "../Cart/Cart";

const FoodDetails = () => {
  const [products, setProducts] = useState({});
  const [cart, setCart] = useState([]);
  const [meals, setMeals] = useState([]);

  const router = useParams();
  const { foodId } = router;

  useEffect(() => {
    fetch(`http://localhost:5000/t-meals/${foodId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [foodId]);

  const {
    _id,
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
  } = products;

  useEffect(() => {
    fetch("http://localhost:5000/t-meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
      });
  }, []);

  useEffect(() => {
    const storedCart = getData();
    const savedCart = [];
    for (const id in storedCart) {
      const cartProduct = meals.find((product) => product._id === id);
      if (cartProduct) {
        const quantity = storedCart[id];
        cartProduct.quantity = quantity;
        savedCart.push(cartProduct);
      }
    }
    setCart(savedCart);
  }, [meals]);

  const handleAddToCart = (products) => {
    let newCart = [];
    const exists = cart.find((crt) => crt._id === products._id);
    if (!exists) {
      products.quantity = 1;
      newCart = [...cart, products];
    } else {
      const rest = cart.filter((crt) => crt._id !== products._id);
      exists.quantity += 1;
      newCart = [...rest, exists];
      toast.error("Product already has been added in cart");
    }

    setCart(newCart);
    setData(products._id);
  };

  let total = 0;
  for (const price in cart) {
    total = total + cart[price].price;
  }

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
            <button
              onClick={() => handleAddToCart(products)}
              className="cart-btn"
            >
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
          <div className="mt-5">
            <Link to="/">
              <button className="btn">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mt-10">
          <h1 className="text-2xl mb-2">Your Cart</h1>
          <p>Start adding items to your cart</p>
          <hr className="mt-5" />
        </div>
        {cart.map((singleCrt, index) => (
          <Cart key={index} singleCrt={singleCrt} />
        ))}
        <div className="text-end px-8">
          <p className="text-xl mt-2 capitalize text-red-500">
            total - {total}$
          </p>
        </div>

        <div className="text-center mt-12">
          <Link to="/checkout">
            <button className="btn btn-primary">Go To Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
