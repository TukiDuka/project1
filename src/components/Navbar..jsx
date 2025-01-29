import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch = () => {} }) => {
  return (
    <nav className="flex items-center justify-between px-20 py-20 gap-14 w-full h-[62.58px]">
      <div className="flex items-center">
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z4XztEw64CeJfWOV"
          alt="Logo"
          width="159"
          height="62.58"
        />
      </div>

      <div className="flex items-center gap-[50px] font-bruno">
        <Link to={"/"}>
          <span className="text-[20px] text-[#d58c3e] font-bruno">HOME</span>
        </Link>
        <Link to={"/collection"}>
          <span className="text-[20px] text-white font-bruno">COLLECTION</span>
        </Link>
        <Link to={"/products"}>
          <span className="text-[20px] text-white font-bruno">WOMAN</span>
        </Link>
        <Link to={"/products"}>
          <span className="text-[20px] text-white font-bruno">MEN</span>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="flex items-center gap-3 bg-white rounded-[20px] px-4 py-2 w-[393px] h-[50px]">
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z4XztEw64CeJfWOW"
            alt="Search"
            width="31"
            height="31"
          />
          <input
            type="text"
            placeholder="Search ..."
            onChange={(e) => onSearch(e.target.value)}
            className="bg-transparent border-none outline-none font-bruno text-[15px] w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center">
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z4XztEw64CeJfWOY"
            alt="Cart"
            width="57"
            height="57"
          />
        </div>
        <button className="bg-[#fffdfd] text-black font-bruno text-[15px] text-center rounded-[50px] px-0 py-0 w-[133px] h-[50px]">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
