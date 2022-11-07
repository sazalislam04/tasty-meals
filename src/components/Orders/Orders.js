import React, { useEffect, useState } from "react";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  });

  return (
    <div className="container p-2 mx-auto sm:p-4 ">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        Orders Summary
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="bg-gray-500">
            <tr className="text-left">
              <th className="p-3">Id #</th>
              <th className="p-3">Client</th>
              <th className="p-3">Product Photo</th>
              <th className="p-3">Product</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Order key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
