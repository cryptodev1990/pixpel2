import React from "react";
import { useNavigate } from "react-router-dom";

const LandingHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-16 py-4 px-16 mb-16">
      <div className="flex items-end">
        <div
          className="flex bg-app-black-button px-2 py-2 justify-center rounded-md cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg
            className="h-8 w-8 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="5" y1="12" x2="19" y2="12" />{" "}
            <line x1="5" y1="12" x2="9" y2="16" />{" "}
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
        </div>
        <div className="flex justify-center text-6xl font-semibold w-full">
          {title}
        </div>
      </div>
      <div className="flex flex-row gap-28 justify-center">
        <div className="flex flex-col gap-3">
          <div className="text-gray-500 text-lg">AVERAGE PRICE</div>
          <div className="text-4xl font-bold">$1 500</div>
        </div>
        <div className="flex flex-col gap-3 text-lg">
          <div className="text-gray-500">VOLUME</div>
          <div className="text-4xl font-bold">$12 282 250</div>
        </div>
        <div className="flex flex-col gap-3 text-lg">
          <div className="text-gray-500">MINTED NFT</div>
          <div className="text-4xl font-bold">35 000</div>
        </div>
        <div className="flex flex-col gap-3 text-lg">
          <div className="text-gray-500">PLAYERS</div>
          <div className="text-4xl font-bold">40 000</div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
