import React, { useState } from "react";
import GamingAccountOverview from "./GamingAccount/GamingAccountOverview";
import TokenButton from "../Button/TokenButton";
import GamingTable from "./GamingAccount/GamingTable";

const GameAccount = () => {
  const [selected, setSelected] = useState(0);

  const handleClick = (idx) => () => {
    setSelected(idx);
  };
  return (
    <div>
      <GamingAccountOverview />
      <div className="flex mt-4 mb-8 gap-4">
        <TokenButton
          title="DEPOSIT"
          selected={selected === 0}
          handleClick={handleClick(0)}
        />
        <TokenButton
          title="WITHDRAW"
          selected={selected === 1}
          handleClick={handleClick(1)}
        />
        <TokenButton
          title="TRANSFER"
          selected={selected === 2}
          handleClick={handleClick(2)}
        />
      </div>
      <GamingTable />
    </div>
  );
};

export default GameAccount;
