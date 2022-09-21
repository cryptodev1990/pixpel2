import React from "react";
import flower from "../../asssets/images/flower.svg";
import plane from "../../asssets/images/plane.png";
import blockchain from "../../asssets/images/blockchain.png";

const SuccessModal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-10 overflow-x-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="flex items-center px-4 py-6 min-h-screen">
            <div className="relative flex flex-col w-full max-w-2xl mx-auto bg-app-black-modal rounded-xl shadow-lg md:px-20 py-12 text-lg">
              <div className="flex justify-center items-center py-4 rounded-md mb-3" style={{background:"linear-gradient(90deg, #2EBD85 0%, #5EE9B2 52.6%, #2EBD85 100%)"}}>
                <img src={flower} alt="flower" className="h-15 w-125 absolute"/>
                CONGRATULATIONS!
              </div>
              <div className="flex justify-center items-center py-4 rounded-md mb-3" style={{background:"linear-gradient(90deg, #8BE2FF 0%, #1CB2E5 32.81%, #2CC2F5 67.19%, #8BE2FF 100%)"}}>LEGENDARY PLANE</div>
              <img src={plane} alt="plane" className="mb-5" />
              <img src={blockchain} alt="blockchain" className="mb-3" />
              <div className="bg-app-black rounded-md flex justify-center py-4 mb-4">NAME FALCON</div>
              <div className="bg-app-green rounded-md flex justify-center py-4 cursor-pointer" onClick={() => setShowModal(false)}>OK</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SuccessModal;
