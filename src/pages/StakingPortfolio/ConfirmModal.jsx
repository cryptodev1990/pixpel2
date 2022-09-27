import React from "react";

const ConfirmModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-x-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-2xl mx-auto bg-app-black-modal rounded-xl shadow-lg px-14 py-14">
                <div className="text-2xl mb-8">Are you sure?</div>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div className="bg-app-black rounded-md px-8 py-4 flex justify-between">
                    <div>Token:</div>
                    <div className="text-app-blue">PIXP</div>
                  </div>
                  <div className="bg-app-red-unlocked rounded-md flex justify-center items-center text-app-red">
                    UNLOCKED
                  </div>
                  <div className="bg-app-black rounded-md px-8 py-4 flex justify-between">
                    <div>APR:</div>
                    <div className="text-app-blue">8%</div>
                  </div>
                  <div className="bg-app-black rounded-md px-8 py-4 flex justify-between">
                    <div>Days:</div>
                    <div className="text-app-blue">120</div>
                  </div>
                </div>
                <div className="bg-app-black flex justify-between w-full px-8 py-4 rounded-md gap-6 mb-5">
                  <div>Max CAP:</div>
                  <div className="text-app-blue">200.000 PIXP</div>
                </div>
                <div className="grid grid-cols-2 gap-5 mb-16">
                  <div className="flex justify-between mr-3">
                    <div>Lender FEE 1%:</div>
                    <div>2.000 PIXP</div>
                  </div>
                  <div className="flex justify-between ml-3">
                    <div>Insurance 1%:</div>
                    <div>2.000 PIXP</div>
                  </div>
                  <div className="flex justify-between mr-3">
                    <div>Interest 6%:</div>
                    <div>12.000 PIXP</div>
                  </div>
                  <div className="flex justify-between ml-3">
                    <div>To pay in 120 Days:</div>
                    <div>216.000 PIXP</div>
                  </div>
                </div>
                <div
                  className="bg-app-green rounded-lg w-full flex justify-center py-5 cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  CONFIRM
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ConfirmModal;
