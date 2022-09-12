import React from "react";

const NFTOverview = () => {
  return (
    <div className="flex justify-between w-full h-max py-8 px-5 bg-app-black rounded-lg items-baseline">
      <div className="flex flex-col">
        <div className="text-2xl mb-3">NFT Account</div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <div className="text-sm text-gray-400 mb-2">Value Purchase</div>
            <div className="flex gap-3 items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
              <div className="text-base">300.000 PIXP</div>
              <div className="text-gray-400 text-sm">
                = 3,832,194,124.10 TUSD
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-gray-400 mb-2">Selling Value</div>
            <div className="flex gap-3 items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
              <div className="text-base">400.000 PIXP</div>
              <div className="text-gray-400 text-sm">
                = 5,832,194,124.10 TUSD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTOverview;
