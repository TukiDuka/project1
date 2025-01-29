import React from "react";

const ProductDetails = ({
  title = "ONE LIFE GRAPHIC T-SHIRT",
  price = "$50",
  description = "This graphic t-shirt which is perfect for any occasion. Crafted from soft and breathable fabric, it offers superior comfort and style",
  rating = 4.5,
}) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400 text-[20px]">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span
            key={i}
            className="relative inline-block text-gray-400 text-[20px]"
          >
            ★
            <span className="absolute top-0 left-0 w-[50%] overflow-hidden text-yellow-400">
              ★
            </span>
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400 text-[20px]">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-[660px] font-bruno text-white mt-[40px]">
      <h1 className="text-[36px] font-normal leading-[1.2]">{title}</h1>
      <div className="flex gap-1">{renderStars(rating)}</div>
      <p className="text-[36px] font-normal m-0">{price}</p>
      <p className="text-[14px] font-normal leading-[1.4] m-0 max-w-[660px]">
        {description}
      </p>
    </div>
  );
};

export default ProductDetails;
