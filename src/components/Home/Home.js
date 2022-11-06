import React from "react";
import slide1 from "../../assets/banner-1.jpg";
import slide2 from "../../assets/banner-2.jpg";
import slide3 from "../../assets/banner-3.jpg";
import slide4 from "../../assets/banner-4.jpg";
import City from "./City";
import Slider from "./Slider";

const sliderItem = [
  {
    img: slide1,
    prev: 4,
    id: 1,
    next: 2,
  },
  {
    img: slide2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    img: slide3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    img: slide4,
    prev: 3,
    id: 4,
    next: 1,
  },
];

const Home = () => {
  return (
    <div>
      <div className="carousel w-full h-[592px] overflow-hidden">
        {sliderItem.map((item) => (
          <Slider key={item.id} item={item} />
        ))}
      </div>
      <City />
    </div>
  );
};

export default Home;
