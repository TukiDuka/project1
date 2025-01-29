import React from "react";
import img from ".././images/singleimg.jpg";

const ProductImageGallery = () => {
  return (
    <div className="hero w-[53%] h-[800px] flex mt-[40px] gap-5">
      <div className="image gap-5 flex flex-col">
        <img className="w-[200px]  h-[210px] rounded-[20px]" src={img} alt="" />
        <img className="w-[200px]  h-[210px] rounded-[20px]" src={img} alt="" />
        <img className="w-[200px]  h-[210px] rounded-[20px]" src={img} alt="" />
      </div>
      <img
        className="w-[700px] h-[670px] bg-white rounded-[20px]"
        src={img}
        alt=""
      />
    </div>
  );
};

export default ProductImageGallery;
