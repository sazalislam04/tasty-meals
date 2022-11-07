import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 px-8 shadow lg:px-20">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-semibold text-orange-500">
          tMeals
        </Link>
      </div>
      <div className="flex-none">
        <ul>
          <li className="mr-5 text-md">
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
        <div className="text-2xl mr-5 cursor-pointer text-orange-500">
          <FaShoppingBag />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
