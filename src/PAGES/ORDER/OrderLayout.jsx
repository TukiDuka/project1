import React from "react";
import OrderCart from "../../components/OrderCart";
import OrderSummary from "../../components/OrderSummary";
import Layout from "../../components/layout";

const OrderLayout = () => {
  return (
    <Layout>
      <div className="flex justify-between pr-20 mt-[100px] mb-[200px]">
        <OrderCart />
        <OrderSummary />
      </div>
    </Layout>
  );
};

export default OrderLayout;
