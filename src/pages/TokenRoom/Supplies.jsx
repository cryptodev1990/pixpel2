import React from "react";
import DropDownButton from "../../components/DropDown/DropDownButton";
import EachTokenDetail from "../../components/TokenRoom/EachTokenDetail";

const TokenList = [
  {
    id: 1,
    title: "PIXP",
  },
  {
    id: 2,
    title: "BNB",
  },
  {
    id: 3,
    title: "AVAX",
  },
  {
    id: 4,
    title: "ETH",
  },
];

const Supplies = () => {
  return (
    <div className="my-28 flex flex-col">
      <div className="flex gap-7 items-end mb-12">
        <div className="w-44">
          <DropDownButton
            initialContent="Token"
            contentList={TokenList}
            backgroundColor="bg-app-black"
          />
        </div>
        <div className="text-app-blue text-xl">PIXPEL</div>
      </div>
      <div className="flex flex-col gap-9 justify-center">
        <EachTokenDetail type="MAIN" />
        <EachTokenDetail type="RESERVE" />
        <EachTokenDetail type="VESTING" />
        <EachTokenDetail type="YIELD" />
        <EachTokenDetail type="STAKING" />
        <EachTokenDetail type="PUBLIC" />
        <EachTokenDetail type="MAIN" />
        <EachTokenDetail type="MAIN" />
        <EachTokenDetail type="MAIN" />
        <EachTokenDetail type="MAIN" />
        <EachTokenDetail type="MAIN" />
        <EachTokenDetail type="MAIN" />
      </div>
    </div>
  );
};

export default Supplies;
