import React from "react";
import DropDownButton from "../../DropDown/DropDownButton";
import { durationList } from "./dataList";

const WrapNFTModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-x-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-xl mx-auto bg-app-black-modal rounded-xl shadow-lg md:px-12 py-12 text-lg">
                <div className="flex items-center justify-center mb-6 text-2xl">
                  WRAP NFT IN A BOX
                </div>
                <div className="text-xl mt-6 mb-3">Quantity:</div>
                <div className="flex justify-between bg-app-black rounded py-5 px-5 mb-2">
                  <div>84 428 532.124</div>
                  <div className="text-app-blue">MAX</div>
                </div>
                <div className="flex justify-end text-gray-400 text-sm mb-5">
                  Remain: 539 239 253.12043
                </div>
                <div className="text-xl mb-3">Duration:</div>
                <DropDownButton
                  initialContent={durationList[0].title}
                  contentList={durationList}
                  backgroundColor="bg-app-black"
                />
                <div className="flex justify-center items-center mt-8">
                  <div
                    className="px-10 py-4 cursor-pointer w-max bg-app-blue rounded-md"
                    onClick={() => setShowModal(false)}
                  >
                    Confirm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default WrapNFTModal;
