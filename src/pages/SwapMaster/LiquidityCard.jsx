import React, { useState } from "react";
import ExchangeCardForLiquidity from "./ExchangeCardForLiquidity";
import LiquidityModal from "./LiquidityModal";
import WithdrawalModal from "./WithdrawalModal";

const LiquidityCard = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="flex flex-col px-12 py-12 bg-app-black rounded-xl">
        <div className="flex justify-center">
          <div className="text-xl font-semibold">Add liquidity</div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="text-sm font-medium text-slate-500">
            Add liquidity to recieve LP token
          </div>
        </div>
        <div className="flex flex-col px-16 py-8 mt-6 mb-8 rounded-xl bg-app-black-light">
          <div className="flex justify-center mb-4">
            <div className="text-base font-semibold">
              You are the first liquidity provider.
            </div>
          </div>
          <div className="flex justify-center mb-3">
            <div className="text-sm font-normal text-slate-700">
              The ratio of tokens you add will set the price of this pool
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-sm font-normal text-slate-700">
              Once you are happy with the rate clock supply to review
            </div>
          </div>
        </div>
        <ExchangeCardForLiquidity />
        <div className="flex flex-col py-8 mt-6 mb-8 rounded-xl bg-app-black-light">
          <div className="flex justify-center pb-5 mb-4 border-b-2 border-app-black">
            <div className="text-base font-medium">
              Initial prices and pool share
            </div>
          </div>
          <div className="flex flex-row justify-around text-base font-medium">
            <div className="flex flex-col">
              <div className="flex flex-row justify-center">
                <div>193.095</div>
              </div>
              <div>PIXP per BNB</div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-center">
                <div>193.095</div>
              </div>
              <div>PIXP per BNB</div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-center">
                <div>193.095</div>
              </div>
              <div>PIXP per BNB</div>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center h-16 rounded-md cursor-pointer h-18 bg-app-blue hover:bg-app-blue"
          onClick={handleModal}
        >
          <div className="text-lg">confirm</div>
        </div>
      </div>
      <LiquidityModal showModal={showModal} setShowModal={setShowModal} />
      <WithdrawalModal />
    </>
  );
};

export default LiquidityCard;
