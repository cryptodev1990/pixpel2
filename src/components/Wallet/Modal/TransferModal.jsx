import React from "react";

const TransferModal = (props) => {
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
                
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default TransferModal;
