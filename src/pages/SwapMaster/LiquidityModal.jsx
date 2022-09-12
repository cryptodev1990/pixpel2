import React, { useState } from "react";
import BNB from "../../asssets/images/UserHome/bnb.png";
import LiquidityCreateModal from "./LiquidityCreateModal";

export default function LiquidityModal(props) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleCreateModal = () => {
    props.setShowModal(false);
    setShowCreateModal(true);
    console.log("ok");
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => props.setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div
                className="relative flex flex-col px-16 py-16 mx-auto text-lg shadow-lg bg-app-black rounded-xl"
                style={{ width: "630px", height: "659px" }}
              >
                <div className="flex mb-5">
                  <div className="text-2xl font-medium">
                    You are creating a pool
                  </div>
                </div>
                <div className="flex flex-row items-center mb-5">
                  <div className="flex h-2/3">
                    <img src={BNB} alt={""} />
                  </div>
                  <div className="text-5xl font-medium">BNB/PIXP</div>
                </div>
                <div className="flex flex-row justify-between py-5 mb-2 rounded-md px-7 bg-app-black-light">
                  <div className="text-base font-normal">BNB Deposited</div>
                  <div className="text-base font-medium text-blue-700">
                    0.103576
                  </div>
                </div>
                <div className="flex flex-row justify-between py-5 mb-2 rounded-md px-7 bg-app-black-light">
                  <div className="text-base font-normal">PIXP Deposited</div>
                  <div className="text-base font-medium text-blue-700">20</div>
                </div>
                <div className="flex flex-col py-5 mb-2 rounded-md px-7 bg-app-black-light">
                  <div className="flex flex-row justify-between mb-3">
                    <div className="text-base font-normal">Rotes</div>
                    <div className="text-base font-medium text-blue-700">
                      1 BNB = 193.1 PIXP
                    </div>
                  </div>
                  <div className="flex flex-row justify-end">
                    <div className="text-base font-medium text-blue-700">
                      1 PIXP = 0.005179 BNB
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between py-5 mb-5 rounded-md px-7 bg-app-black-light">
                  <div className="text-base font-normal">Share of Pool</div>
                  <div className="text-base font-medium text-blue-700">
                    100%
                  </div>
                </div>
                <div
                  className="flex items-center justify-center rounded-md cursor-pointer h-14 bg-app-blue hover:bg-app-blue"
                  onClick={handleCreateModal}
                >
                  <div className="text-lg">Create Pool & Supply</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <LiquidityCreateModal
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
      />
    </>
  );
}
