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
              <td><div className="text-gray-400 w-max">Game</div></td>
              <td className="px-6"><div className="text-gray-400 w-max">Coin</div></td>
              <td className="px-6"><div className="text-gray-400 w-max">Rewards</div></td>
              <td className="px-6"><div className="text-gray-400 w-max">Staked Amount</div></td>
              <td className="px-6"><div className="text-gray-400 w-max">Start Date</div></td>
              <td className="px-6"><div className="text-gray-400 w-max">EST.APY</div></td>
              <td className="px-6"><div className="text-gray-400 w-max">Locked Days</div></td>
              <td className="px-6"><div className="text-gray-400 w-max">Invest Date</div></td>
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
                  <td className="py-5"><div className="w-max">{menu.Game}</div></td>
                  <td className="px-6"><div className="w-max">{menu.Coin}</div></td>
                  <td className="px-6"><div className="w-max">{menu.Rewards}</div></td>
                  <td className="px-6"><div className="w-max">{menu.StakedAmount}</div></td>
                  <td className="px-6"><div className="w-max">{menu.StartDate}</div></td>
                  <td className="px-6"><div className="w-max">{menu.ESTAPY}</div></td>
                  <td className="px-6"><div className="w-max">{menu.LockedDays}</div></td>
                  <td className="px-6"><div className="w-max">{menu.InvestDate}</div></td>
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
