import React from "react";
import OrderCart from "./OrderCart";

const OrderSummary = () => {
  return (
    <div className="hero w-[500px] h-[600px] border-white/20 border-[0.5px] rounded-[20px]">
      <div className="contain p-10">
        <h1 className="text-white/80 font-bruno text-[24px]">Order summary</h1>
        <div className="mt-[50px] flex justify-between">
          <p className="text-white/50 font-bruno text-[20px] ">Subtotal</p>
          <p className="text-white font-bruno text-[20px] ">$565</p>
        </div>
        <div className="mt-[24px] flex justify-between">
          <p className="text-white/50 font-bruno text-[20px] ">
            Discount (-20%){" "}
          </p>
          <p className="text-red-700 font-bruno text-[20px] ">$565</p>
        </div>
        <div className="mt-[24px] flex justify-between">
          <p className="text-white/50 font-bruno text-[20px] ">Delivery Fee</p>
          <p className="text-white font-bruno text-[20px] ">$15</p>
        </div>
        <div className="w-[100%] h-[0.5px] bg-white/50 mt-[30px]"></div>
        <div className="mt-[24px] flex justify-between">
          <p className="text-white font-bruno text-[20px] ">Total</p>
          <p className="text-white font-bruno text-[24px] ">$467</p>
        </div>
        <div className="w-full mt-[20px]">
          <button className="w-[65%] h-[45px] bg-white rounded-[30px]"></button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
