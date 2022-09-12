import React, { useState } from "react";
import ExchangeCard from "./ExchangCard";
import MarketModal from "./MarketModal";

const MarketCard = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="flex flex-col px-12 py-12 bg-app-black rounded-xl">
        <ExchangeCard />
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
            <div className="text-2xl text-blue-700">27.13990533</div>
          </div>
        </div>
        <div className="mt-2">
          <div className="text-sm text-slate-400">
            Please confirm conversion within the time.
          </div>
        </div>
        <div
          className="flex items-center justify-center mt-5 rounded-md cursor-pointer bg-app-blue hover:bg-app-blue"
          style={{ height: "70px" }}
          onClick={handleModal}
        >
          <div className="text-lg">confirm</div>
        </div>
      </div>
      <MarketModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default MarketCard;
