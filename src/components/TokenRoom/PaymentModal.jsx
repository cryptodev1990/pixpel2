import React from "react";
import Calculation from "../StakingPortfolio/Calculation";

const PaymentModal = ({ showModal, setShowModal }) => {
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
              <div className="relative flex flex-col w-full max-w-3xl mx-auto bg-app-black rounded-xl shadow-lg py-20">
                <div className="flex justify-center text-3xl mb-12">
                  PAYMENT
                </div>
                <div className="flex justify-between">
                  <div className="w-1/4" />
                  <div className="w-1/2 flex flex-col items-center gap-5">
                    <div className="w-full">
                      <Calculation
                        title="Create New Token Fee:"
                        cost="20 UDS"
                      />
                    </div>
                    <div className="w-full">
                      <Calculation title="Comission 1%:" cost="2 USD" />
                    </div>
                  </div>
                  <div className="w-1/4" />
                </div>
                <div className="flex justify-center gap-2 my-16">
                  <input type="checkbox" />
                  <div className="text-gray-500 text-sm">
                    I have read an accepted Pixpel's terms
                    <br />
                    and conditions
                  </div>
                </div>
                <div className="flex justify-center">
                  <div
                    className="bg-app-green px-48 py-5 cursor-pointer rounded-lg"
                    onClick={() => setShowModal(false)}
                  >
                    PAY
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

export default PaymentModal;
