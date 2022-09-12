import React from "react";
import { gamingList } from "../dataList";
import SwapButton from "../StartAccount/SwapButton";
import BuyButton from "../StartAccount/BuyButton";
import TradeButton from "../StartAccount/TradeButton";

const GamingTable = () => {
  return (
    <table className="table-fixed w-full mt-10">
      <thead>
        <tr>
          <td className="text-gray-400">Coin</td>
          <td className="text-gray-400 w-1/6">Game</td>
          <td className="text-gray-400">Rewards</td>
          <td className="text-gray-400">Deposits</td>
          <td className="text-gray-400">Available</td>
          <td className="flex gap-1 text-gray-400">
            <div className="text-gray-400">DAW</div>
            <svg
              className="h-5 w-5 text-gray-400"
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
              <circle cx="12" cy="12" r="9" />{" "}
              <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
              <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
            </svg>
          </td>
          <td className="text-gray-400 w-1/4">Action</td>
        </tr>
      </thead>
      <tbody className="px-4">
        {gamingList.map((menu, idx) => {
          return (
            <tr key={idx} className="border-b-2 border-app-black">
              <td className="py-3">{menu.coin}</td>
              <td className="py-3">{menu.game}</td>
              <td className="flex flex-col py-2 gap-2">{menu.reward}</td>
              <td>{menu.deposit}</td>
              <td>{menu.available}</td>
              <td>{menu.daw}</td>
              <td>
                <div className="flex gap-4">
                  <BuyButton title="Deposit" />
                  <TradeButton title="Withdraw" />
                  <SwapButton title="Transfer" />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GamingTable;
