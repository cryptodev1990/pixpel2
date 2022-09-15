import React from "react";
import BNB from "../../asssets/images/UserHome/bnb.png";

export default function LiquidityCreateModal(props) {
  return (
    <>
      {props.showCreateModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => props.setShowCreateModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative flex flex-col mx-auto text-lg shadow-lg py-14 px-14 w- bg-app-black rounded-xl w-158 h-137">
                <div className="flex mb-7">
                  <div className="text-2xl font-medium">
                    LP tokens in your wallet
                  </div>
                </div>
                <div className="flex flex-row justify-between py-5 mb-5 rounded-md px-7 bg-app-black-button">
                  <div className="flex flex-row items-center gap-1">
                    <img className="h-2/3" src={BNB} alt={""} />
                    <div className="text-base font-normal">BNB/PIXP</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-base font-medium text-blue-700">
                      1.368
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between py-5 mb-2 rounded-md px-7 bg-app-black-button">
                  <div className="text-base font-normal">Share of Pool</div>
                  <div className="text-base font-medium text-blue-700">
                    100.000000%
                  </div>
                </div>
                <div className="flex flex-row justify-between py-5 mb-2 rounded-md px-7 bg-app-black-button">
                  <div className="text-base font-normal">Pooled BNB</div>
                  <div className="text-base font-medium text-blue-700">
                    0.001248
                  </div>
                </div>
                <div className="flex flex-row justify-between py-5 mb-5 rounded-md px-7 bg-app-black-button">
                  <div className="text-base font-normal">Pooled PIXP</div>
                  <div className="text-base font-medium text-blue-700">
                    15.7531
                  </div>
                </div>
                <div
                  className="flex items-center justify-center rounded-md cursor-pointer h-14 bg-app-blue hover:bg-app-blue"
                  onClick={() => props.setShowCreateModal(false)}
                >
                  <div className="text-lg">close</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
