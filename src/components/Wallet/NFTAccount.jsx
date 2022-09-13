import React from "react";
import NFTOverview from "./NFTAccount/NFTOverview";
import { NFTList } from "./dataList";
import EachNFT from "./NFTAccount/EachNFT";

const NFTAccount = () => {
  return (
    <div>
      <NFTOverview />
      <div className="flex px-6 py-3">
        <div className="flex text-sm text-gray-400 w-1/12">Game</div>
        <div className="flex text-sm text-gray-400 w-1/6 justify-center">
          NFT quantity
        </div>
        <div className="flex text-sm text-gray-400 w-1/4 justify-center">
          Total purchase valuet
        </div>
        <div className="flex text-sm text-gray-400 w-1/6 justify-center">
          Start Date
        </div>
        <div className="flex text-sm text-gray-400 w-1/6 justify-center">
          Earning
        </div>
        <div className="flex text-sm text-gray-400 w-1/12 justify-center">
          Expenses
        </div>
        <div className="flex text-sm text-gray-400"></div>
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
