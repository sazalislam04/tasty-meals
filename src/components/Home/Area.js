import React from "react";
import { Link } from "react-router-dom";

const Area = ({ name }) => {
  const { city, img } = name;
  return (
    <div className="city-img column">
      <div>
        <Link to={`/city/${city}`}>
          <figure className="overlay">
            <img
              className="h-72 w-96"
              src={
                img
                  ? img
                  : "https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
              }
              alt=""
            />
            <span>{city}</span>
            <span className="visit">Visit Area</span>
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default Area;
