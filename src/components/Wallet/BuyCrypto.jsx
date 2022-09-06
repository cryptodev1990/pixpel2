import React from "react";
import TokenButton from "../Button/TokenButton";
import { modeList } from "./Crypto/dataList";
import { buysell } from "./Crypto/dataList";
import Sell from "./Crypto/P2P/Sell";
import Buy from "./Crypto/P2P/Buy";
import Setting from "./Crypto/P2P/Setting";

const BuyCrypto = () => {
  const [modeSelected, setModeSelected] = React.useState(0);
  const [buysellSelected, setBuysellSelected] = React.useState(1);
  const [buyCryptoComponent, setBuyCryptoComponent] = React.useState(<Sell />);
  let temp;
  const buysellclassName = "flex gap-3";
  const handleModeClick = (idx) => () => {
    setModeSelected(idx);
  };
  const handleBuyClick = (idx) => () => {
    setBuysellSelected(idx);
    switch (idx) {
      case 0:
        temp = <Buy />;
        break;
      case 1:
        temp = <Sell />;
        break;
      default:
        break;
    }
    setBuyCryptoComponent(temp);
  };
  return (
    <div>
      <div className="text-xl mb-4">Buy Crypto</div>
      <div className="flex justify-between mb-5">
        <div className="flex gap-3 ">
          {modeList.map((mode, idx) => {
            return (
              <TokenButton
                key={idx}
                idx={idx}
                title={mode.title}
                selected={modeSelected === idx}
                handleClick={handleModeClick(idx)}
              />
            );
          })}
        </div>
        <div
          className={buysellclassName + (modeSelected === 2 ? " hidden" : " ")}
        >
          {buysell.map((menu, idx) => {
            return (
              <TokenButton
                key={idx}
                idx={idx}
                title={menu.title}
                selected={buysellSelected === idx}
                handleClick={handleBuyClick(idx)}
              />
            );
          })}
        </div>
      </div>
      {buyCryptoComponent}
    </div>
  );
};

export default BuyCrypto;
