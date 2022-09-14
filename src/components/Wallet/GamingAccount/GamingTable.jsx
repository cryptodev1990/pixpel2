import React, { useState } from "react";
import { gamingList } from "../dataList";
import SwapButton from "../StartAccount/SwapButton";
import BuyButton from "../StartAccount/BuyButton";
import TradeButton from "../StartAccount/TradeButton";
import WithdrawModal from "../Modal/WithdrawModal";

const GamingTable = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div className="overflow-x-auto relative w-full mt-10">
        <table className="table-auto text-left">
          <thead>
            <tr>
              <td className="text-gray-400 px-6">Coin</td>
              <td className="text-gray-400 px-6">Game</td>
              <td className="text-gray-400 px-6">Rewards</td>
              <td className="text-gray-400 px-6">Deposits</td>
              <td className="text-gray-400 px-6">Available</td>
              <td className="flex gap-1 px-6">
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
              <td className="text-gray-400 w-1/6 px-6">Action</td>
            </tr>
          </thead>
          <tbody>
            {gamingList.map((menu, idx) => {
              return (
                <tr
                  key={idx}
                  className={
                    idx !== gamingList.length - 1
                      ? "border-b-2 border-app-black"
                      : ""
                  }
                >
                  <td className="py-5 px-6">{menu.coin}</td>
                  <td className="px-6">{menu.game}</td>
                  <td className="px-6">{menu.reward}</td>
                  <td className="px-6">{menu.deposit}</td>
                  <td className="px-6">{menu.available}</td>
                  <td className="px-6">{menu.daw}</td>
                  <td className="px-6">
                    <div className="flex gap-4">
                      <BuyButton title="Deposit" />
                      <TradeButton title="Withdraw" handleModal={handleClick} />
                      <SwapButton title="Transfer" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {<WithdrawModal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default GamingTable;
