import React from "react";
import ProductDetails from "./ProductDetails";
import ColorSelection from "./ColorSelection";
import SizeSelection_AddToCart from "./SizeSelection_AddToCart";

const SingleProductLayout = () => {
  return (
    <div>
      <ProductDetails />
      <ColorSelection />
      <SizeSelection_AddToCart />
    </div>
  );
};

export default SingleProductLayout;
