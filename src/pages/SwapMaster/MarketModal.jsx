import React from "react";
import { useDispatch } from "react-redux";
import { marketSuccessHandle } from "../../actions/market";

export default function MarketModal(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    props.setShowModal(false);
    dispatch(marketSuccessHandle());
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
              <div className="relative flex flex-col px-10 py-10 mx-auto text-lg shadow-lg w- bg-app-black rounded-xl">
                <div className="flex mb-5">
                  <div className="text-2xl font-medium">
                    Security Verification
                  </div>
                </div>
                <div className="flex flex-col gap-1 py-5 rounded-md px-7 bg-app-black-button mb-7">
                  <div className="flex flex-row justify-between">
                    <div className="flex w-1/6">
                      <div className="text-base font-medium text-slate-400">
                        Amount
                      </div>
                    </div>
                    <div className="flex w-3/4">
                      <div className="text-base font-medium">
                        Recieve 19.000000 USDT (Network Fee 1UST)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex w-1/6">
                      <div className="text-base font-medium text-slate-400">
                        Amount
                      </div>
                    </div>
                    <div className="flex w-3/4">
                      <div className="text-base font-medium">
                        GIBIoefwf8ef8aw9HU8v8ebfqbjwq
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex w-1/6">
                      <div className="text-base font-medium text-slate-400">
                        Network
                      </div>
                    </div>
                    <div className="flex w-3/4">
                      <div className="text-base font-medium">Tron (TRC20)</div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex w-1/6">
                      <div className="text-base font-medium text-slate-400">
                        Source
                      </div>
                    </div>
                    <div className="flex w-3/4">
                      <div className="text-base font-medium">
                        Funding Wallet
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-3 text-base font-medium">
                    Phone Number Verification Code
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between h-16 py-5 mb-1 rounded-md px-7 bg-app-black-button">
                  <div className="flex flex-row w-">
                    <input className="w-72 bg-app-black-button" />
                  </div>
                  <div className="text-base text-slate-400">
                    Verification code sent
                  </div>
                </div>
                <div className="flex mb-7">
                  <div className="text-sm font-normal text-slate-400">
                    Enter the 6-digit code sent to 0997****94
                  </div>
                </div>
                <div className="flex mb-3">
                  <div className="text-base font-medium ">
                    Email Verification Code
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between h-16 py-5 mb-1 rounded-md px-7 bg-app-black-button">
                  <div className="flex flex-row w-">
                    <input className="w-72 bg-app-black-button" />
                  </div>
                  <div className="text-base text-slate-400">
                    Verification code sent
                  </div>
                </div>
                <div className="flex mb-7">
                  <div className="text-sm font-normal text-slate-400">
                    Enter the 6-digit code sent to hello***@gmail.com
                  </div>
                </div>
                <div className="flex mb-7">
                  <div className="text-base font-medium text-app-blue">
                    Security verification unavailable
                  </div>
                </div>
                <div
                  className="flex items-center justify-center h-16 rounded-md cursor-pointer bg-app-blue hover:bg-app-blue"
                  onClick={handleClick}
                >
                  <div className="text-lg font-medium">confirm</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
