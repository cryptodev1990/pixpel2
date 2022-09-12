import React from "react";
import BankTable from "./Payment/BankTable";
import CardTable from "./Payment/CardTable";
import FiatBanks from "./Payment/FiatBanks";
import FiatCards from "./Payment/FiatCards";
import TokenButton from "../Button/TokenButton";

const PaymentMethod = () => {
  const [selected, setSelected] = React.useState(0);
  const [tempOverview, setTempOverview] = React.useState(<FiatBanks />);
  const [tempTable, setTempTable] = React.useState(<BankTable />);
  const [word, setWord] = React.useState("Bank Transfer");
  const handleClick = (idx) => () => {
    setSelected(idx);
    if (idx === 0) {
      setTempOverview(<FiatBanks />);
      setTempTable(<BankTable />);
      setWord("Bank Transfer");
    } else {
      setTempOverview(<FiatCards />);
      setTempTable(<CardTable />);
      setWord("Card Transfer");
    }
  };
  return (
    <div className="flex flex-col">
      <div className="text-2xl mb-3">Deposit Fiat</div>
      {tempOverview}
      <div className="flex mt-3 gap-3 mb-9">
        <TokenButton
          title="BANKS"
          selected={selected === 0}
          handleClick={handleClick(0)}
        />
        <TokenButton
          title="CARDS"
          selected={selected === 1}
          handleClick={handleClick(1)}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-2xl">{word}</div>
        <div className="bg-app-green px-4 py-3 rounded-md hover:cursor-pointer">
          + ADD
        </div>
      </div>
      {tempTable}
    </div>
  );
};

export default PaymentMethod;
