import React from "react";

const Order = ({ order }) => {
  const { address, email, name, phone, _id, price } = order;
  return (
    <>
      <tr className="border-b border-opacity-20 border-gray-700 bg-gray-100">
        <td className="p-3">
          <p>{_id}</p>
        </td>
        <td className="p-3">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Contact: {phone}</p>
          <p>Location: {address}</p>
        </td>
        <td className="p-3">
          <p>{price}</p>
          <p className="text-gray-600">Friday</p>
        </td>
        <td className="p-3">
          <p>01 Feb 2022</p>
          <p className="text-gray-600">Quantity: </p>
        </td>
        <td className="p-3 text-right">
          <p>$15,792</p>
        </td>
        <td className="p-3 text-right">
          <span className="px-3 py-1 font-semibold rounded-md bg-rose-500 text-gray-100">
            <span>Pending</span>
          </span>
        </td>
      </tr>
    </>
  );
};

export default Order;
