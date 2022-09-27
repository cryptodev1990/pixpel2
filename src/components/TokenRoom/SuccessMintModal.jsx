import React from "react";
import Supply from "../../asssets/images/supply.svg";

const SuccessMintModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-x-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-2xl mx-auto bg-app-black-modal rounded-xl shadow-lg px-16 py-11">
                <div className="flex justify-center -mt-5">
                  <img src={Supply} alt="Supply" />
                </div>
                <div className="flex justify-center text-2xl mt-6 mb-8 font-medium">
                  You are about to Mint Tokens
                </div>
                <div className="text-lg flex justify-center">
                  Supply Name: MAIN
                </div>
                <div className="flex gap-7 my-12">
                  <div className="flex flex-col gap-1 w-1/3">
                    Date
                    <div className="flex justify-center py-5 bg-app-black rounded-md text-app-blue">
                      xx/xx/xx
                    </div>
                    <div className="flex justify-center py-5 bg-app-black rounded-md text-app-blue">
                      xx/xx/xx
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 w-1/3">
                    Wallet
                    <div className="flex justify-center py-5 bg-app-black rounded-md text-app-blue">
                      xxx
                    </div>
                    <div className="flex justify-center py-5 bg-app-black rounded-md text-app-blue">
                      xxx
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 w-1/3">
                    Amount
                    <div className="flex justify-center py-5 bg-app-black rounded-md text-app-blue">
                      xxx
                    </div>
                    <div className="flex justify-center py-5 bg-app-black rounded-md text-app-blue">
                      xxx
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-1">
                  <input type="checkbox" />
                  <div className="text-gray-500 text-sm">
                    I have read an accepted Pixpel terms
                    <br />
                    and conditions
                  </div>
                </div>
                <div className="flex justify-center my-16">
                  <div
                    className="bg-app-green rounded-md px-20 py-5 cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    CONFIRM
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

export default SuccessMintModal;
