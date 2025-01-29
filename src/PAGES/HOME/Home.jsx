import React, { Children } from "react";
import Layout from "../../components/layout";
import HeroSection from "../../components/HeroSection";
import BrandLogos from "../../components/BrandLogos";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <BrandLogos />
        <ProductCard />
      </Layout>
    </div>
  );
};

export default Home;
