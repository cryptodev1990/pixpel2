import React from "react";
import SwapButton from "../StartAccount/SwapButton";
import TradeButton from "../StartAccount/TradeButton";
import BuyButton from "../StartAccount/BuyButton";

const NFTtable = ({ table }) => {
  return (
    <div className="overflow-x-auto relative mt-10 w-full">
      <table className="table-auto">
        <thead>
          <tr>
            <td className="text-gray-400 w-1/12 px-6">NFT</td>
            <td className="text-gray-400 w-1/6 px-6">Purchase value</td>
            <td className="text-gray-400 px-6">Purchase date</td>
            <td className="text-gray-400 px-6">Sold date</td>
            <td className="text-gray-400 px-6">Earning</td>
            <td className="text-gray-400 px-6">Expenses</td>
            <td className="text-gray-400 w-1/6 px-6">Action</td>
          </tr>
        </thead>
        <tbody className="px-4 mt-8">
          {table.map((menu, idx) => {
            return (
              <tr
                key={idx}
                className={
                  idx !== table.length - 1 ? "border-b-2 border-app-black" : ""
                }
              >
                <td className="items-center py-5 px-6">
                  <img
                    src={menu.NFT}
                    alt="NFT"
                    className="w-10 h-10 rounded"
                  ></img>
                </td>
                <td className="items-center px-6">{menu.purchaseValue}</td>
                <td className="items-center px-6">{menu.purchaseDate}</td>
                <td className="px-6">{menu.soldDate}</td>
                <td className="px-6">{menu.earning}</td>
                <td className="px-6">{menu.expenses}</td>
                <td className="px-6">
                  <div className="flex gap-4">
                    <BuyButton title="Sell" />
                    <SwapButton title="Bid" />
                    <TradeButton title="Play" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NFTtable;
