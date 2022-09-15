import React, { useState } from "react";
import TokenButton from "../../Button/TokenButton";
import { stakingList } from "../dataList";
import UnlockButton from "./UnlockButton";

const LockedUnlocked = () => {
  const [selected, setSelected] = useState(0);

  const handleClick = (idx) => () => {
    setSelected(idx);
  };
  return (
    <div>
      <div className="flex gap-4 mt-8">
        <TokenButton
          title="UNLOCKED"
          selected={selected === 0}
          handleClick={handleClick(0)}
        />
        <TokenButton
          title="LOCKED"
          selected={selected === 1}
          handleClick={handleClick(1)}
        />
      </div>
      <div className="overflow-x-auto relative mt-10 x-full">
        <table className="table-auto">
          <thead>
            <tr>
              <td className="text-gray-400 px-6">Game</td>
              <td className="text-gray-400 px-6">Coin</td>
              <td className="text-gray-400 px-6">Rewards</td>
              <td className="text-gray-400 px-6">Staked Amount</td>
              <td className="text-gray-400 px-6">Start Date</td>
              <td className="text-gray-400 px-6">EST.APY</td>
              <td className="text-gray-400 px-6">Locked Days</td>
              <td className="text-gray-400 px-6">Invest Date</td>
              <td className="w-1/12"></td>
            </tr>
          </thead>
          <tbody className="px-4">
            {stakingList.map((menu, idx) => {
              return (
                <tr
                  key={idx}
                  className={
                    idx !== stakingList.length - 1
                      ? "border-b-2 border-app-black"
                      : ""
                  }
                >
                  <td className="py-5 px-6">{menu.Game}</td>
                  <td className="px-6">{menu.Coin}</td>
                  <td className="px-6">{menu.Rewards}</td>
                  <td className="px-6">{menu.StakedAmount}</td>
                  <td className="px-6">{menu.StartDate}</td>
                  <td className="px-6">{menu.ESTAPY}</td>
                  <td className="px-6">{menu.LockedDays}</td>
                  <td className="px-6">{menu.InvestDate}</td>
                  <td className="px-6">
                    <UnlockButton />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LockedUnlocked;
