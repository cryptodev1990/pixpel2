import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Market = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div className="cursor-pointer" onClick={handleDropDown}>
      <div className="flex px-5 gap-1 items-center justify-between">
        <div>Market</div>
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div className="relative">
        {showDropDown ? (
          <div className="absolute inset-0 z-10">
            <div
              className="fixed inset-0 w-full h-full"
              onClick={handleDropDown}
            />
            <div className="flex flex-col rounded-b-md bg-app-black text-base">
              <div
                className="relative flex justify-start px-5 border-b-2 border-app-black"
                onClick={() => navigate("/nft-market")}
              >
                NFT
              </div>
              <div
                className="relative flex justify-start px-5 py-1"
                onClick={() => navigate("/game-market")}
              >
                Game
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Market;