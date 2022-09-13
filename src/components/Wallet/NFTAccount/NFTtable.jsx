import React, { useState } from "react";
import SwapButton from "./SwapButton";
import TradeButton from "./TradeButton";
import BuyButton from "./BuyButton";

const CoinTable = ({table}) => {
  return (
    <table className="table-fixed w-full mt-10">
      <thead>
        <tr>
          <td className="text-gray-400">NFT</td>
          <td className="text-gray-400">Purchase value</td>
          <td className="text-gray-400">Purchase date</td>
          <td className="text-gray-400">Sold date</td>
          <td className="text-gray-400">Earning</td>
          <td className="text-gray-400">Expenses</td>
          <td className="text-gray-400">Action</td>
        </tr>
      </thead>
      <tbody className="px-4">
        {table.map((menu, idx) => {
          return (
            <tr key={idx} className="border-b-2 border-app-black">
              <td className="py-3">
                <div>{menu.Coin}</div>
              </td>
              <td className="py-3">
                <div>{menu.Total}</div>
              </td>
              <td className="flex flex-col py-2 gap-2">
                <div>{menu.Available}</div>
              </td>
              <td>
                <div>{menu.Orders}</div>
              </td>
              <td>
                <div>{menu.PIXP}</div>
              </td>
              <td>
                <div className="flex gap-4">
                  <SwapButton title="Swap" />
                  <TradeButton title="Trade" />
                  <BuyButton title="Buy" />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CoinTable;
