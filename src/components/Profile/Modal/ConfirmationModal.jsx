import React from "react";
import SecurityButton from "../../Button/SecurityButton";
import ModalHalfButton from "../../Button/ModalHalfButton";

const ConfirmationModal = (props) => {
  return (
    <>
      {props.showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => props.setShowModal(false)}
            ></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div
                className="relative flex flex-col w-full max-w-lg p-4 mx-auto 
                            bg-app-black rounded-xl shadow-lg px-12 py-12 text-lg"
              >
                <div className="text-xl mb-3">Order confirmation reminders</div>
                <div className="mb-8 text-sm text-gray-400">When the dunction enable you must reooNFT every time order is suring</div>
                <div className="mb-5 flex items-center justify-center w-full h-14 gap-3 bg-app-black-button rounded-md hover:bg-app-blue cursor-pointer">
                  <div className="rounded-full h-3 w-3 bg-app-red"></div>
                  <div className="text-base">Select All</div>
                </div>
                <div className="flex gap-4 mb-4">
                  <ModalHalfButton title="Purchase NFT" />
                  <ModalHalfButton title="Market order" />
                </div>
                <div className="flex gap-4 mb-10">
                  <SecurityButton title="Buy" />
                  <SecurityButton title="Sell" />
                </div>
                <div className="flex mt-4 mb-10 gap-4 w-full">
                  <ModalHalfButton title="Cancel" />
                  <ModalHalfButton title="Apply" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ConfirmationModal;
