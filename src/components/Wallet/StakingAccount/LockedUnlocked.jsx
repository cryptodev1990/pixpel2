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
      <table className="table-auto w-full mt-10">
        <thead>
          <tr>
            <td className="text-gray-400">Game</td>
            <td className="text-gray-400">Coin</td>
            <td className="text-gray-400">Rewards</td>
            <td className="text-gray-400">Staked Amount</td>
            <td className="text-gray-400">Start Date</td>
            <td className="text-gray-400">EST.APY</td>
            <td className="text-gray-400">Locked Days</td>
            <td className="text-gray-400">Invest Date</td>
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
                <td className="py-5">{menu.Game}</td>
                <td>{menu.Coin}</td>
                <td>{menu.Rewards}</td>
                <td>{menu.StakedAmount}</td>
                <td>{menu.StartDate}</td>
                <td>{menu.ESTAPY}</td>
                <td>{menu.LockedDays}</td>
                <td>{menu.InvestDate}</td>
                <td>
                  <UnlockButton />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LockedUnlocked;
