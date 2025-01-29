import React from "react";
import Layout from "../../components/layout";
import Cards from "../../components/cards";
import Filters from "../../components/Filters";
import PageRoad from "../../components/PageRoad";

const Products = () => {
  return (
    <div>
      <Layout>
        <PageRoad />
        <Filters />
        <div className="flex pl-20 flex-wrap gap-x-[43px] gap-y-[100px] pb-[300px]">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </Layout>
    </div>
  );
};

export default Products;
