import React from "react";
import StartAccountOverview from "./StartAccount/StartAccountOverview";
import TokenButton from "../Button/TokenButton";
import { tokenList, tokencoinList, fiatList } from "./StartAccount/dataList";
import CoinTable from "./StartAccount/CoinTable";

const StartAccount = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleClick = (idx) => () => {
    setSelectedIndex(idx);
  };

  return (
    <div className="flex flex-col">
      <StartAccountOverview />
      <div className="flex gap-4 mt-6 mb-3">
        {tokenList.map((menu, idx) => {
          return (
            <TokenButton
              key={idx}
              idx={idx}
              title={menu.title}
              selected={selectedIndex === idx}
              handleClick={handleClick(idx)}
            />
          );
        })}
      </div>
      <div className="flex gap-4 mt-6 mb-5">
        {selectedIndex === 0
          ? fiatList.map((menu, idx) => {
              return <TokenButton key={idx} title={menu.title} />;
            })
          : tokencoinList.map((menu, idx) => {
              return <TokenButton key={idx} title={menu.title} />;
            })}
      </div>
      <CoinTable idx={selectedIndex} />
    </div>
  );
};

export default StartAccount;
