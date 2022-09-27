import React from "react";
import DropDownButton from "../DropDown/DropDownButton";

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

const IEODetail = ({number}) => {
  return (
    <div className="flex gap-24 border-b-2 border-app-black pb-6 px-40">
      <div className="flex flex-col gap-1">
        <div className="text-gray-500">N˚</div>
        <div className="bg-app-black-button rounded-lg w-16 h-16 flex justify-center items-center">{number}</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-gray-500">IEO Date</div>
        <div className="bg-app-black-button rounded-lg w-80 px-7 py-5">xx/xx/xx</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-gray-500">IEO Tokens</div>
        <div className="bg-app-black-button rounded-lg w-80 py-8" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-gray-500">IEO Wallet</div>
        <div className="bg-app-black-button rounded-lg w-80 h-16">
          <DropDownButton initialContent="" contentList={TokenList} backgroundColor="bg-app-black-button" />
        </div>
      </div>
    </div>
  )
}

export default IEODetail;