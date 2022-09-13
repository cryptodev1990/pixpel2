import React from "react";
import SwapButton from "../StartAccount/SwapButton";
import TradeButton from "../StartAccount/TradeButton";
import BuyButton from "../StartAccount/BuyButton";

const NFTtable = ({ table }) => {
  return (
    <table className="table-auto w-full mt-7">
      <thead>
        <tr>
          <td className="text-gray-400 w-1/12">NFT</td>
          <td className="text-gray-400 w-1/6">Purchase value</td>
          <td className="text-gray-400">Purchase date</td>
          <td className="text-gray-400">Sold date</td>
          <td className="text-gray-400">Earning</td>
          <td className="text-gray-400">Expenses</td>
          <td className="text-gray-400 w-1/6">Action</td>
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
              <td className="items-center py-5">
                <img
                  src={menu.NFT}
                  alt="NFT"
                  className="w-10 h-10 rounded"
                ></img>
              </td>
              <td className="items-center">{menu.purchaseValue}</td>
              <td className="items-center">{menu.purchaseDate}</td>
              <td>{menu.soldDate}</td>
              <td>{menu.earning}</td>
              <td>{menu.expenses}</td>
              <td>
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
  );
};

export default NFTtable;
