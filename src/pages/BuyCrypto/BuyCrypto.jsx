import React, { useState } from "react";
import Buy from "../../components/Crypto/P2P/Buy";
import Setting from "../../components/Crypto/P2P/Setting";
import { Header } from "../../components";
import TokenButton from "../../components/Button/TokenButton";
import Sell from "../../components/Crypto/P2P/Sell";

const BuyCrypto = () => {
  const [selectedBuySell, setSelectedBuySell] = useState(0);
  const [tempComponent, setTempComponent] = useState(<Buy />);
  const handleBuySellClick = (idx) => () => {
    setSelectedBuySell(idx);
    switch (idx) {
      case 0:
        setTempComponent(<Buy />);
        break;
      case 1:
        setTempComponent(<Sell />);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-1/6"></div>
        <div className="flex flex-col w-2/3">
          <div className="flex justify-end">
            <div className="flex w-5/6 justify-between">
              <Setting />
              <div className="flex items-end gap-4">
                <TokenButton
                  title="BUY"
                  selected={selectedBuySell === 0}
                  handleClick={handleBuySellClick(0)}
                />
                <TokenButton
                  title="SELL"
                  selected={selectedBuySell === 1}
                  handleClick={handleBuySellClick(1)}
                />
              </div>
            </div>
          </div>
          {tempComponent}
        </div>
      </div>
    </>
  );
};

export default BuyCrypto;
