import React, { useEffect, useState } from "react";
import Area from "./Area";

const City = () => {
  const [mealCity, setMealCity] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/t-city")
      .then((res) => res.json())
      .then((data) => {
        setMealCity(data);
      });
  }, []);
  return (
    <div className="px-8 lg:px-20 py-20 ">
      <h2 className="text-2xl mb-4 ml-5">
        Find us in these cities and many more!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mealCity.map((name) => (
          <Area key={name._id} name={name} />
        ))}
      </div>
    </div>
  );
};

export default City;
