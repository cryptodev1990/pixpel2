import React, { useState } from "react";
import TokenDropdownInput from "../../components/DropDown/TokenDropdownInput";
import MarketModal from "./MarketModal";

const fromTokenList = [
  {
    id: 1,
    title: "AVA",
    url: "../../assets/images/UserHome/avax.png",
  },
  {
    id: 2,
    title: "AVA",
    url: "../../assets/images/UserHome/avax.png",
  },
  {
    id: 3,
    title: "AVA",
    url: "../../assets/images/UserHome/avax.png",
  },
];

const toTokenList = [
  {
    id: 1,
    title: "PIXP",
    url: "../../assets/images/UserHome/bnb.png",
  },
  {
    id: 2,
    title: "PIXP",
    url: "../../assets/images/UserHome/bnb.png",
  },
  {
    id: 3,
    title: "PIXP",
    url: "../../assets/images/UserHome/bnb.png",
  },
];

const MarketCard = () => {
  const [convert, setConvert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  const handleConvert = () => {
    setConvert(!convert);
  };
  return (
    <div className="flex flex-col 2xs:px-[50px] 2xs:py-[50px] rounded-md w-155 bg-app-black mb-3 px-3 py-3">
      <div className="flex flex-col justify-between text-lg 1xs:flex-row">
        <div className="font-semibold">From</div>
        <div className="font-normal text-gray-400">
          { convert ? "Balance: 229.9022" : "Balance: 233,319,129.9022" }
        </div>
      </div>
      <TokenDropdownInput
        initialContent={convert ? toTokenList[0] : fromTokenList[0]}
        contentList={convert ? toTokenList : fromTokenList}
        Max={true}
      />
      <div className="flex justify-center w-full mt-5">
        <div
          className="flex items-center justify-center rounded-full cursor-pointer full bg-app-black-button"
          style={{ marginBottom: "10px", width: "53px", height: "53px" }}
          onClick={handleConvert}
        >
          <svg
            className="w-10 h-10 text-white-800"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="15 4 19 4 19 8" />
            <line x1="14.75" y1="9.25" x2="19" y2="4" />
            <line x1="5" y1="19" x2="9" y2="15" />
            <polyline points="15 19 19 19 19 15" />
            <line x1="5" y1="5" x2="19" y2="19" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-between text-lg 1xs:flex-row">
        <div className="font-semibold">To</div>
        <div className="font-normal text-gray-400">
					{convert ? "Balance: 233,319,129.9022" : "Balance: 229.9022" }
				</div>
      </div>
      <TokenDropdownInput
        initialContent={convert ? fromTokenList[0] : toTokenList[0]}
        contentList={convert ? fromTokenList : toTokenList}
        Max={false}
      />

      <div className="flex flex-col gap-2 mt-5 text-sm border-b-2 border-app-black">
        <div className="flex flex-row justify-between">
          <div>Price</div>
          <div>1BTC = 31109.2 USDT</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>Inverse Price</div>
          <div>1 USDT = 0.000002433 BTC</div>
        </div>
        <div className="flex flex-row items-center justify-between mb-4">
          <div>You will recieve</div>
          <div className="text-2xl text-app-blue">27.13990533</div>
        </div>
      </div>

      <div className="mt-2">
        <div className="text-sm text-slate-400">
          Please confirm conversion within the time.
        </div>
      </div>
      <div
        className="flex items-center justify-center h-16 mt-5 rounded-md cursor-pointer bg-app-blue hover:bg-app-blue"
        onClick={handleModal}
      >
        <div className="text-lg">confirm</div>
      </div>
			
			<MarketModal showModal={showModal} setShowModal={setShowModal}/>
    </div>
  );
};

export default MarketCard;
