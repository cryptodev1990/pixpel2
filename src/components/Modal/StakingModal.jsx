import React, { useState } from "react";
import DateSlider from "../Market/DateSlider";
import StakingSuccessModal from "./StakingSuccessModal";

const StakingModal = ({ showModal, setShowModal }) => {
  const [selected, setSelected] = useState(0);
  const [initialValue, setInitialValue] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleClick = (id) => async () => {
    setSelected(id);
    switch (id) {
      case 0:
        setInitialValue(30);
        break;
      case 1:
        setInitialValue(90);
        break;
      case 2:
        setInitialValue(120);
        break;
      default:
        break;
    }
  };

  const handleConfirmClick = () => {
    setShowModal(false);
    setShowSuccessModal(true);
  };

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-10 overflow-x-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="flex items-center px-4 py-6 min-h-screen">
            <div className="relative flex flex-col w-full max-w-2xl mx-auto bg-app-black-modal rounded-xl shadow-lg md:px-12 py-12 text-lg">
              <div className="flex items-center justify-center mb-6 text-2xl">
                LOCKED
              </div>
              <div className="px-10">
                <DateSlider initialValue={initialValue} />
              </div>
              <div className="items-center mt-12 mb-4 text-xl">Duration</div>
              <div className="flex justify-between gap-3 mb-8">
                <div
                  className={
                    (selected === 0 ? "bg-app-blue " : "bg-app-black ") +
                    "flex justify-center rounded-md py-4 cursor-pointer hover:bg-app-blue w-1/3"
                  }
                  onClick={handleClick(0)}
                >
                  30 days
                </div>
                <div
                  className={
                    (selected === 1 ? "bg-app-blue " : "bg-app-black ") +
                    "flex justify-center rounded-md py-4 cursor-pointer hover:bg-app-blue w-1/3"
                  }
                  onClick={handleClick(1)}
                >
                  90 days
                </div>
                <div
                  className={
                    (selected === 2 ? "bg-app-blue " : "bg-app-black ") +
                    "flex justify-center rounded-md py-4 cursor-pointer hover:bg-app-blue w-1/3"
                  }
                  onClick={handleClick(2)}
                >
                  120 days
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-7">
                <div className="bg-app-black rounded-md px-7 py-5 flex justify-between">
                  <div className="text-lg">AMOUNT:</div>
                  <div className="text-app-blue">100</div>
                </div>
                <div className="bg-app-black rounded-md px-7 py-5 flex justify-between">
                  <div className="text-lg">EST.ASY</div>
                  <div className="text-app-blue">10%</div>
                </div>
                <div className="bg-app-black rounded-md px-7 py-5 flex justify-between">
                  <div className="text-lg">EST.INTEREST</div>
                  <div className="text-app-blue">10 PIXP</div>
                </div>
              </div>
              <div className="text-xl mb-3">Stake Amount</div>
              <div className="bg-app-black rounded-md px-7 py-5 flex justify-between mb-5">
                <div className="text-xl">100 PIXP</div>
                <div className="text-app-blue text-lg">MAX</div>
              </div>
              <div className="flex justify-center items-center mb-3">
                <div
                  className="px-16 py-4 cursor-pointer w-max bg-app-blue rounded-md"
                  onClick={handleConfirmClick}
                >
                  Confirm
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                <input type="checkbox" />
                <label className="text-base text-gray-500">
                  I have read and I agree
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {
        <StakingSuccessModal
          showModal={showSuccessModal}
          setShowModal={setShowSuccessModal}
        />
      }
    </>
  );
};

export default StakingModal;
