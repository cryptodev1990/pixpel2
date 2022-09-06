import React from "react";
import PIXP from "../../../asssets/images/UserHome/bnb.png";
import BTC from "../../../asssets/images/UserHome/btc.png";
import HelpCenterButton from "../../Button/HelpCenterButton";

const BuyModal = (props) => {
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
              <div className="relative flex flex-col w-full max-w-lg p-4 mx-auto bg-app-black rounded-xl shadow-lg px-6 py-6 text-lg">
                <div>Pay:</div>
                <div className="flex bg-app-black-button rounded-md px-3 items-center w-full justify-between py-3 mt-2 mb-6">
                  <div className="flex items-center">
                    <img src={PIXP} alt="PIXP" className="w-5 h-5" />
                    <div className="border-r-2 px-3 border-gray-500 mr-2">PIPX</div>
                    <div className="text-gray-400">1000 000.0000</div>
                  </div>
                  <div className="text-app-blue text-lg">MAX</div>
                </div>
                <div>Receive:</div>
                <div className="flex bg-app-black-button rounded-md px-3 items-center w-full py-3 mt-2">
                  <div className="flex items-center">
                    <img src={BTC} alt="PIXP" className="w-5 h-5" />
                    <div className="border-r-2 px-3 border-gray-500 mr-2">BTC</div>
                    <div>84.2252900000</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 my-8">
                  <HelpCenterButton title="Cancel" />
                  <HelpCenterButton title="Buy BTC" />
                </div>
              </div>
              
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default BuyModal;
