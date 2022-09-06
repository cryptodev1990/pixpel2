import React from "react";
import TokenButton from "../Button/TokenButton";
import { modeList } from "./Crypto/dataList";
import { buysell } from "./Crypto/dataList";
import BNB from "../../asssets/images/UserHome/bnb.png";
import Sell from "./Crypto/P2P/Sell";
import Buy from "./Crypto/P2P/Buy";

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
      <div className="flex gap-7">
        <div className="flex flex-col gap-2">
          <div>Amount</div>
          <div className="rounded flex items-center px-3 bg-app-black-button py-3">
            <div className="text-gray-400 mr-2 text-sm">Enter Amount</div>
            <div className=" border-r px-3 border-gray-400 mr-2">UAH</div>
            <div className="text-app-blue">Search</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Fiat</div>
          <div className="rounded flex items-center px-3 bg-app-black-button py-3">
            <img src={BNB} className="h-5 w-5 mr-2" alt="BNB" />
            <div className="mr-3">BNB</div>
            <svg
              class="h-4 w-4 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Fiat</div>
          <div className="rounded flex items-center px-3 bg-app-black-button py-3">
            <div className="mr-3">Monobank</div>
            <svg
              className="h-4 w-4 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
      {buyCryptoComponent}
    </div>
  );
};

export default BuyCrypto;
