import React from "react";
import { Link } from "react-router-dom";

const WinterCollection = () => {
  return (
    <div className="bg-[#161616] min-h-screen p-[50px_80px] font-['Bruno_Ace']">
      <main className="flex flex-wrap gap-8">
        <div className="flex-0 0 [548px]">
          <div className="relative rounded-[20px] overflow-hidden">
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z4jCcK44F0YMkTM_"
              alt="Winter Collection"
              className="w-full h-[437px] object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col relative">
          <div>
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z4XY4z20mZOK0-8J"
              alt="Collection"
              className="w-[830px] h-[182px] rounded-[20px] object-cover"
            />
          </div>

          <div className="flex items-center mt-12">
            <div>
              <h1 className="text-[#d58c3e] text-[96px] m-0">Winter</h1>
              <p className="text-white text-[32px] mt-5">
                style is your choice
              </p>
            </div>

            <div className="w-[182px] h-[182px] border-2 border-white rounded-full flex items-center justify-center absolute right-[110px]">
              <Link to={"/products"}>
                <span className="text-white text-[15px]">EXPLORE</span>
              </Link>
            </div>
          </div>

          <span className="absolute right-0 text-white text-[64px] [writing-mode:vertical-rl] rotate-180">
            2025
          </span>
        </div>

        <div className="flex justify-between items-center w-full mt-8">
          <span className="text-white text-[64px] flex justify-start [writing-mode:vertical-rl] rotate-180">
            2025
          </span>
          <div className="relative w-[619px] h-[213px] rounded-[20px] overflow-hidden">
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z4jCcK44F0YMkTNA"
              alt="Winter Fashion"
              className="w-full h-[224px] object-cover"
            />
          </div>
          <div className="relative w-[750px] h-[213px] rounded-[20px] overflow-hidden">
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z4jCcK44F0YMkTNB"
              alt="Winter Style"
              className="w-full h-[224px] object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WinterCollection;
