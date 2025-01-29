import React from "react";
import img from "../images/hoodie1.jpg";
import svg from "../images/star.png";
import like from "../images/like.png";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div>
      <div className="card w-[350px] h-[430px] mt-[50px]">
        <img
          src={img}
          alt=""
          className="w-[350px] h-[430px] object-cover rounded-[20px]"
        />
        <Link to="/SingleProduct">
          <p className="text-white font-bruno text-xl mt-[20px]">
            Hoodie with Tape Details
          </p>
        </Link>
        <div className="svg flex mt-[10px] gap-3">
          <img src={svg} alt="" className="w-[20px] h-[20px]" />
          <img src={svg} alt="" className="w-[20px] h-[20px]" />
          <img src={svg} alt="" className="w-[20px] h-[20px]" />
          <img src={svg} alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex justify-between">
          <p className="price font-bruno text-white text-xl mt-[10px]">$30</p>
          <img src={like} alt="" className="w-[30px] h-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
