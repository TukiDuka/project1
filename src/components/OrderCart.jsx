import React from "react";
import img from "../images/hoodie1.jpg";
import svg from "../images/trashban.svg";

const OrderCart = () => {
  return (
    <div className="pl-20">
      <div className="hero w-[1000px] h-[600px] border-white/20 border-[0.5px] rounded-[20px]">
        <div className="contain p-10">
          <div className="cart">
            <div className="contain-left flex gap-5  h-[125px]">
              <img
                className="w-[125px] h-[125px] rounded-[20px]"
                src={img}
                alt=""
              />
              <div className="contain-middle ">
                <p className="text-white font-bruno text-xl ">
                  Gradient Graphic t-shirt
                </p>
                <p className="text-white font-bruno text-[14px] mt-[2px]">
                  Size: Large
                </p>
                <p className="text-white font-bruno text-[14px] mt-[2px]">
                  Color: White
                </p>
                <p className="text-white font-bruno text-[24px] mt-[15px]">
                  $145
                </p>
              </div>
              <div className="contain-right  h-[125px] flex flex-col justify-between items-end ml-[320px]">
                <img className="w-[30px] h-[35px]" src={svg} alt="" />
                <button className="w-[115px] h-[44px] bg-white border-none text-black font-bruno text-[20px] p-1 rounded-[50px]">
                  - 1 +
                </button>
              </div>
            </div>
          </div>
          <div className="cart mt-[65px]">
            <div className="contain-left flex gap-5  h-[125px]">
              <img
                className="w-[125px] h-[125px] rounded-[20px]"
                src={img}
                alt=""
              />
              <div className="contain-middle ">
                <p className="text-white font-bruno text-xl ">
                  Gradient Graphic t-shirt
                </p>
                <p className="text-white font-bruno text-[14px] mt-[2px]">
                  Size: Large
                </p>
                <p className="text-white font-bruno text-[14px] mt-[2px]">
                  Color: White
                </p>
                <p className="text-white font-bruno text-[24px] mt-[15px]">
                  $145
                </p>
              </div>
              <div className="contain-right  h-[125px] flex flex-col justify-between items-end ml-[320px]">
                <img className="w-[30px] h-[35px]" src={svg} alt="" />
                <button className="w-[115px] h-[44px] bg-white border-none text-black font-bruno text-[20px] p-1 rounded-[50px]">
                  - 1 +
                </button>
              </div>
            </div>
          </div>
          <div className="cart mt-[65px]">
            <div className="contain-left flex gap-5  h-[125px]">
              <img
                className="w-[125px] h-[125px] rounded-[20px]"
                src={img}
                alt=""
              />
              <div className="contain-middle ">
                <p className="text-white font-bruno text-xl ">
                  Gradient Graphic t-shirt
                </p>
                <p className="text-white font-bruno text-[14px] mt-[2px]">
                  Size: Large
                </p>
                <p className="text-white font-bruno text-[14px] mt-[2px]">
                  Color: White
                </p>
                <p className="text-white font-bruno text-[24px] mt-[15px]">
                  $145
                </p>
              </div>
              <div className="contain-right  h-[125px] flex flex-col justify-between items-end ml-[320px]">
                <img className="w-[30px] h-[35px]" src={svg} alt="" />
                <button className="w-[115px] h-[44px] bg-white border-none text-black font-bruno text-[20px] p-1 rounded-[50px]">
                  - 1 +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
