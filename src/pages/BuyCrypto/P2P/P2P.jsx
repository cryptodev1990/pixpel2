import React from "react";
import { coinList } from "../../../components/Crypto/dataList";
import CoinType from "./CoinType";
import Setting from "./Setting";
import { Button } from "../../../components";
import Sell from "./Sell";
import Buy from "./Buy";
import { useAppContext } from "../../../contexts/AppContext";

const P2P = () => {
  const context = useAppContext();
  const handleClick = (id) => () => {
    context.setP2PState(id);
  };
  return (
    <div>
      <div className="flex flex-row justify-center gap-1 mb-12 sm:gap-8 xs:gap-6 2xs:gap-4">
        {coinList.map((coin, idx) => {
          return <CoinType key={idx} title={coin.title} />;
        })}
      </div>
      <div className="flex flex-col items-center gap-5 mx-2 mb-28 2md:flex-row xl:gap-32 xl:justify-center 2md:gap-0 2md:items-end">
        <div className="flex w-48 lg:flex-none"></div>
        <Setting />
        <div className="flex flex-row items-end gap-2 ml-5">
          <Button
            title={"BUY"}
            buttonStyle={"w-24 h-16 text-lg font-semibold"}
            onClick={handleClick(0)}
            selected={context.p2PState === 0}
          />
          <Button
            title={"SELL"}
            buttonStyle={"w-24 h-16 text-lg font-semibold"}
            onClick={handleClick(1)}
            selected={context.p2PState === 1}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-5/6">
          {context.p2PState === 0 ? <Buy /> : null}
          {context.p2PState === 1 ? <Sell /> : null}
        </div>
      </div>
    </div>
  );
};

export default P2P;
