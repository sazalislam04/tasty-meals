import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { prevCart } = useLoaderData();
  const [cart, setCart] = useState(prevCart);

  let total = 0;
  for (let price in cart) {
    total = price + cart[price].price;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.fname.value} ${form.lname.value}`;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const order = {
      name,
      email,
      phone,
      address,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Order placed success");
        } else {
          toast.error("Order doesn't exists");
        }
      });
  };

  return (
    <section className="py-20 food-container px-8 lg:px-20 gap-20">
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
        >
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-sm">
              First name
            </label>
            <input
              id="firstname"
              type="text"
              name="fname"
              placeholder="First name"
              className="w-full rounded-md focus:outline-orange-400 p-2 border border-gray-300 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-sm">
              Last name
            </label>
            <input
              id="lastname"
              type="text"
              name="lname"
              placeholder="Last name"
              className="w-full rounded-md focus:outline-orange-400 p-2 border border-gray-300 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="phone" className="text-sm">
              Phone
            </label>
            <input
              id="phone"
              type="phone"
              name="phone"
              placeholder="Phone"
              className="w-full rounded-md focus:outline-orange-400 p-2 border border-gray-300 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-md focus:outline-orange-400 p-2 border border-gray-300 text-gray-900"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-sm">
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder=""
              className="w-full rounded-md focus:outline-orange-400 p-2 border border-gray-300 text-gray-900"
            />
          </div>
          <div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Placed Order"
            />
          </div>
        </form>
      </div>
      <div className="bg-gray-50 rounded p-6">
        <p className="text-center mb-5 text-2xl font-medium">Cart Summary</p>
        <div className="">
          {cart.map((crt) => {
            return (
              <div key={crt._id}>
                <ul className="flex items-center justify-between border-b py-2">
                  <li>{crt.strMeal}</li>
                  <li>{crt.price}$</li>
                </ul>
              </div>
            );
          })}
          <div className="mt-1 flex items-center justify-between">
            <p className="uppercase text-2xl">total</p>
            <p className="text-xl text-red-500">{total ? total : 0}$</p>
          </div>
        </div>
        <Link to="/">
          <p className="mt-2 text-orange-500 flex items-center gap-2">
            {" "}
            <FaArrowLeft /> back to home
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Checkout;
