import React, { useState } from "react";
import { Link } from "react-router-dom";

const SizeSelection_AddToCart = ({
  onSizeChange,
  onQuantityChange,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    if (onSizeChange) onSizeChange(size);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
    if (onQuantityChange) onQuantityChange(newQuantity);
  };

  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart(selectedSize, quantity);
  };

  return (
    <div className="w-full max-w-[422px] min-h-[139px] flex flex-col gap-5 p-2.5 box-border">
      <div className="font-bruno text-[14px] font-normal text-white">
        Choose size
      </div>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            className={`flex-1 basis-[85px] h-[37px] rounded-full bg-[#D9D9D9] border-none cursor-pointer font-bruno text-[12px] font-normal text-black transition-colors duration-300 ease-in-out ${
              selectedSize === size ? "bg-[#FFC633]" : ""
            }`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="flex flex-row gap-5 items-center justify-between">
        <div className="flex flex-row gap-7 items-center">
          <button
            className="w-8 h-8 border-none bg-transparent p-0 cursor-pointer"
            onClick={() => handleQuantityChange(-1)}
          >
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z4lPQK44F0YMkTRn"
              alt="decrease"
              className="w-full h-full object-contain"
            />
          </button>
          <span className="font-bruno text-[32px] font-normal text-white">
            {quantity}
          </span>
          <button
            className="w-8 h-8 border-none bg-transparent p-0 cursor-pointer"
            onClick={() => handleQuantityChange(1)}
          >
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z4lPQa44F0YMkTRo"
              alt="increase"
              className="w-full h-full object-contain"
            />
          </button>
        </div>
        <Link to={"/OrderLayout"}>
          <button
            className="flex-1 basis-[206px] h-[45px] rounded-full bg-white border-none cursor-pointer font-bruno text-[14px] font-normal text-black transition-colors duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

SizeSelection_AddToCart.defaultProps = {
  onSizeChange: () => {},
  onQuantityChange: () => {},
  onAddToCart: () => {},
};

export default SizeSelection_AddToCart;
