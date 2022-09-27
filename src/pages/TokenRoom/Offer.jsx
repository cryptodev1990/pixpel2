import React, { useState } from "react";
import DropDownButton from "../../components/DropDown/DropDownButton";
import OfferMenu from "../../components/TokenRoom/OfferMenu";
import OfferVesting from "./OfferVesting";
import OfferIEO from "./OfferIEO";

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

const Offer = () => {
  const [selected, setSelected] = useState(0);
  const [temp, setTemp] = useState(<OfferVesting />);

  const handleVestingClick = () => {
    setSelected(0);
    setTemp(<OfferVesting />);
  };

  const handleIEOClick = () => {
    setSelected(1);
    setTemp(<OfferIEO />);
  };
  return (
    <div className="flex flex-col mt-5">
      <div className="flex justify-center gap-6 mb-12 ml-24">
        <div
          className={
            (selected === 0 ? "bg-app-blue" : "bg-app-black-select") +
            " font-medium px-5 py-2 rounded-lg cursor-pointer"
          }
          onClick={handleVestingClick}
        >
          VEST
        </div>
        <div
          className={
            (selected === 1 ? "bg-app-blue" : "bg-app-black-select") +
            " font-medium px-5 py-2 rounded-lg cursor-pointer"
          }
          onClick={handleIEOClick}
        >
          IEO
        </div>
        <div
          className={
            (selected === 2 ? "bg-app-blue" : "bg-app-black-select") +
            " font-medium px-5 py-2 rounded-lg cursor-pointer"
          }
          onClick={() => setSelected(2)}
        >
          POOL
        </div>
      </div>
      <div className="flex gap-9 items-end">
        <div className="w-44">
          <DropDownButton
            initialContent="Tokens"
            contentList={TokenList}
            backgroundColor="bg-app-black"
          />
        </div>
        <div className="text-app-blue text-lg flex gap-1">
          <div className="underline text-app-blue">Note:</div>
          Vest tokens are selected only from Non Minted Tokens
        </div>
      </div>
      <div className="bg-app-black my-20 px-16 py-11 gap-20 flex">
        <OfferMenu title="MAIN" />
        <OfferMenu title="RESERVE" />
        <OfferMenu title="VESTING" />
        <OfferMenu title="YIELD" />
      </div>
      {temp}
    </div>
  );
};

export default Offer;
