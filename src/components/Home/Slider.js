import React from "react";
import "./Slider.css";

const Slider = ({ item }) => {
  const { img, id, prev, next } = item;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={img} alt="" className="w-full object-cover" />
      </div>
      <div className="absolute flex justify-center items-center transform -translate-y-1/2 text-center left-5 right-5 top-1/2">
        <h1 className="text-6xl text-white uppercase">
          It's the food and groceries <br /> you love
        </h1>
      </div>
      <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-2/3 w-full mx-auto text-center lg:w-1/2">
        <p className="text-gray-200 text-xl ">
          People who love to eat are always the best people. To eat is a
          necessity, but to eat intelligently is an art
        </p>
      </div>
      <div className="absolute flex justify-center items-center transform -translate-y-1/2 text-left left-5 right-5 bottom-5 ">
        <span className="loader"></span>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle border-none bg-orange-400"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle border-none bg-orange-400"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slider;
