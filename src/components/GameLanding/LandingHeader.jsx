import React from "react";
import { useNavigate } from "react-router-dom";

const LandingHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col 2xl:gap-16 xl:gap-12 lg:gap-10 md:gap-7 gap-5 py-4 2xl:px-16 xl:px-13 lg:px-10 md:px-7 sm:px-4 px-1 2xl:mb-16 xl:mb-12 lg:mb-10 md:mb-7 mb-5">
      <div className="flex items-end">
        <div
          className="flex bg-app-black-button px-2 py-2 justify-center rounded-md cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg
            className="2xl:h-8 xl:h-6 lg:h-4 h-3 2xl:w-8 xl:w-6 lg:w-4 w-3"
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
        <div className="flex justify-center 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold w-full">
          {title}
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 2xl:gap-28 xl:gap-24 lg:gap-20 md:gap-16 sm:gap-12 gap-4">
        <div className="flex flex-col gap-3">
          <div className="text-gray-500 2xl:text-lg lg:text-base text-sm">AVERAGE PRICE</div>
          <div className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold">$1 500</div>
        </div>
        <div className="flex flex-col gap-3 2xl:text-lg lg:text-base text-sm">
          <div className="text-gray-500">VOLUME</div>
          <div className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold">$12 282 250</div>
        </div>
        <div className="flex flex-col gap-3 2xl:text-lg lg:text-base text-sm">
          <div className="text-gray-500">MINTED NFT</div>
          <div className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold">35 000</div>
        </div>
        <div className="flex flex-col gap-3 2xl:text-lg lg:text-base text-sm">
          <div className="text-gray-500">PLAYERS</div>
          <div className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold">40 000</div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
