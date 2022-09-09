import React from "react";
import TokenButton from "../../Button/TokenButton";
import { stakingList } from "../StartAccount/dataList";
import UnlockButton from "./UnlockButton";

const LockedUnlocked = () => {
  const [selected, setSelected] = React.useState(0);

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
            <td className="text-gray-400 w-1/12">Coin</td>
            <td className="text-gray-400">Rewards</td>
            <td className="text-gray-400">Staked Amount</td>
            <td className="text-gray-400">Start Date</td>
            <td className="text-gray-400 w-1/12">EST.APY</td>
            <td className="text-gray-400">Locked Days</td>
            <td className="text-gray-400">Invest Date</td>
            <td></td>
          </tr>
        </thead>
        <tbody className="px-4">
          {stakingList.map((menu, idx) => {
            return (
              <tr key={idx} className="border-b-2 border-app-black">
                <td className="py-3">{menu.Game}</td>
                <td className="py-3">{menu.Coin}</td>
                <td className="py-3">{menu.Rewards}</td>
                <td className="py-3">{menu.StakedAmount}</td>
                <td className="flex flex-col py-2 gap-2">{menu.StartDate}</td>
                <td className="py-3">{menu.ESTAPY}</td>
                <td className="py-3">{menu.LockedDays}</td>
                <td className="py-3">{menu.InvestDate}</td>
                <td className="py-3">
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
