import React from "react";
import { Link } from "react-router-dom";

const Area = ({ name }) => {
  const { city, img } = name;
  return (
    <div className="city-img column">
      <div>
        <Link to={`/city/${city}`}>
          <figure className="overlay">
            <img className="h-72 w-96" src={img} alt="" />
            <span>{city}</span>
            <span className="visit">Visit Area</span>
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default Area;
