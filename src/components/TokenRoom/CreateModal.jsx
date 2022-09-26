import React, { useState } from "react";
import Supply from "../../asssets/images/supply.svg";
import Close from "../../asssets/images/close.svg";
import Calculation from "../StakingPortfolio/Calculation";
import PaymentModal from "./PaymentModal";

const CreateModal = ({ showModal, setShowModal }) => {
  const [showPayModal, setShowPayModal] = useState(false);
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-x-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-3xl mx-auto bg-app-black-modal rounded-xl shadow-lg px-16 py-11">
                <div className="flex justify-between">
                  <div />
                  <div
                    className="bg-app-black-button px-5 py-5 rounded-lg w-max cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <img src={Close} alt="close" />
                  </div>
                </div>
                <div className="flex justify-center -mt-5">
                  <img src={Supply} alt="Supply" />
                </div>
                <div className="flex justify-center text-2xl mt-9 mb-12">
                  Supply Info
                </div>
                <div className="flex justify-center gap-10 mb-8">
                  <div className="bg-app-black-button py-4 px-16 rounded-md text-xl">
                    Name: PIXP
                  </div>
                  <div className="bg-app-black-button py-4 px-16 rounded-md text-xl">
                    ABBR: PIXP
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <Calculation title="Total Supply:" cost="6.000.000 PIXP" />
                  <Calculation title="Supply Division:" cost="6" />
                  <Calculation title="Hard Cap:" cost="3.000.000 PIXP" />
                  <Calculation title="Soft Cap" cost="2.000.000" />
                  <Calculation title="Nature" cost="Deflationary" />
                  <Calculation title="Create new Token fee:" cost="20 USD" />
                </div>
                <div className="flex justify-between mb-16">
                  <div className="w-1/4" />
                  <div className="w-1/2">
                    <Calculation title="Comission 1%:" cost="2 USD" />
                  </div>
                  <div className="w-1/4" />
                </div>
                <div className="flex justify-center">
                  <div
                    className="px-32 py-5 bg-app-green rounded-lg cursor-pointer"
                    onClick={() => setShowPayModal(true)}
                  >
                    CREATE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {<PaymentModal showModal={showPayModal} setShowModal={setShowPayModal} />}
    </>
  );
};

export default CreateModal;
