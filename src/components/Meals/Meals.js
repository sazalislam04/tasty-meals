import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Food from "./Food";

const Meals = () => {
  const router = useParams();
  const { city } = router;
  const [cityName, setCityName] = useState({});
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/t-city/${city}`)
      .then((res) => res.json())
      .then((data) => {
        setCityName(data);
      });
  }, [city]);

  useEffect(() => {
    fetch("http://localhost:5000/t-meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
      });
  }, []);

  return (
    <>
      <div className="relative">
        <div className="city-overlay">
          <img
            className="w-full h-[592px] object-cover"
            src={cityName.img}
            alt=""
          />
        </div>
        <h1 className="absolute flex justify-center items-center transform -translate-y-1/2 text-left left-5 right-5 top-1/2 text-6xl text-white lg:w-1/2 w-full mx-auto capitalize">
          <span>
            best restaurant Foods from{" "}
            <span className="text-orange-500 font-semibold">
              {cityName.city}
            </span>
          </span>
        </h1>
        <div className="absolute flex justify-center items-center transform -translate-y-1/2 text-left left-5 right-5 bottom-5 ">
          <span class="loader"></span>
        </div>
      </div>

      <div className="px-8 lg:px-20 py-16">
        <div className="text-center mb-14">
          <input
            type="text"
            placeholder="Search your food"
            className="py-2 px-2 border rounded border-orange-300 focus:outline-orange-500 w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <Food key={meal._id} meal={meal} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Meals;
