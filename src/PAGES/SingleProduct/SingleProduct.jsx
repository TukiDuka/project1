import React from "react";
import Layout from "../../components/layout";
import PageRoad from "../../components/PageRoad";
import arrow from "../../images/arrow.svg";
import ProductImageGallery from "../../components/ProductImageGallery";
import ProductBuy from "../../components/ProductBuy";
import Reviews from "../../components/Reviews";
import Cards from "../../components/cards";

const SingleProduct = () => {
  return (
    <div>
      <Layout>
        <div className="flex items-center">
          <PageRoad />
          <img
            className="w-[18px] h-[18px] mt-[50px] mx-3"
            src={arrow}
            alt=""
          />
          <p className="text-white text-xl font-bruno mt-[50px]">T-SHIRT</p>
        </div>
        <div className="flex justify-between px-20">
          <ProductImageGallery />
          <ProductBuy />
        </div>
        <Reviews />
        <h1 className="text-white font-bruno text-4xl mt-[100px] text-center">
          YOU MIGHT ALSO LIKE
        </h1>
        <div className="mt-[50px] px-20 flex flex-wrap justify-between mb-[400px]">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </Layout>
    </div>
  );
};

export default SingleProduct;
