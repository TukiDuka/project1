import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.";
import Footer from "./components/Footer";
import Home from "./PAGES/HOME/Home";
import LastCollection from "./PAGES/COLLECTION/LastCollection";
import Products from "./PAGES/PRODUCTS/products";
import SingleProduct from "./PAGES/SingleProduct/SingleProduct";
import OrderLayout from "./PAGES/ORDER/OrderLayout";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<LastCollection />} />
            <Route path="/products" element={<Products />} />
            <Route path="/SingleProduct" element={<SingleProduct />} />
            <Route path="/OrderLayout" element={<OrderLayout />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
