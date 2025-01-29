import React from "react";
import image from "../assets/Main.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="flex justify-end relative items-start w-full h-[90vh]">
      <h1 className="text-white text-8xl top-[25%] pl-20 w-[100%] absolute font-bruno">
        Style Your Way, <br />
        Conquer the Day!
      </h1>
      <img src={image} className="w-[78%] h-[95%]" alt="" />
      <div className="flex relative md:absolute  items-start w-[220px] h-[90px] bg-white rounded-[50px] right-[82%] top-[70%]">
        <Link to={"/products"}>
          <button className="font-bruno text-2xl relative md:absolute left-[35px] top-[30px]">
            Shop now
          </button>
        </Link>
        <Link to={"/products"}>
          <div className="flex items-center">
            <div className="flex flex-row h-1">
              <span className="text-white text-6xl relative md:absolute top-[22px] left-[850px] font-bruno text-nowrap">
                New collection
              </span>
            </div>
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z4CFass5D--WlqB6"
              alt="Arrow"
              className="w-[105px] h-[101px] relative md:absolute left-[1420px] top-[1px]"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
