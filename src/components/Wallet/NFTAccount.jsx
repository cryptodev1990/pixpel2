import React from "react";
import NFTOverview from "./NFTAccount/NFTOverview";
import { NFTList } from "./dataList";
import EachNFT from "./NFTAccount/EachNFT";

const NFTAccount = () => {
  return (
    <div>
      <NFTOverview />
      <div className="flex py-6 overflow-x-auto relative w-full">
        <div className="flex text-base text-gray-400 w-1/12 px-6">Game</div>
        <div className="flex text-base text-gray-400 w-1/6 px-6">
          NFT quantity
        </div>
        <div className="flex text-base text-gray-400 w-1/4 px-6">
          Total purchase valuet
        </div>
        <div className="flex text-base text-gray-400 w-1/6 px-6">
          Start Date
        </div>
        <div className="flex text-base text-gray-400 w-1/6 px-6">
          Earning
        </div>
        <div className="flex text-base text-gray-400 w-1/12 px-6">
          Expenses
        </div>
        <div className="flex text-base text-gray-400 px-6"></div>
      </div>
      <div className="flex flex-col gap-3">
        {NFTList.map((menu, idx) => {
          return (
            <EachNFT
              key={idx}
              idx={idx}
              content={menu}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NFTAccount;
