import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withdrawCloseModal } from "../../actions/withdraw";

export default function WithdrawalModal() {
  const selector = useSelector((state) => state.withdraw);
  const dispatch = useDispatch();

  return (
    <>
      {selector ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => dispatch(withdrawCloseModal())}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative flex flex-col px-10 py-10 mx-auto text-lg shadow-lg bg-app-black-modal rounded-xl">
                <div className="flex justify-start mb-5">
                  <div className="text-2xl font-medium">Withdraw</div>
                </div>
                <div className="flex flex-col px-8 py-5 mb-5 rounded-md bg-app-black">
                  <div className="flex flex-row justify-start">
                    <div className="text-base font-medium w-36 text-slate-400">
                      Amount
                    </div>
                    <div className="flex-none text-base font-medium w-93">
                      Receive 19.000000 USDT (Network fee 1 UST)
                    </div>
                  </div>
                  <div className="flex flex-row justify-start">
                    <div className="text-base font-medium w-36 text-slate-400">
                      Address
                    </div>
                    <div className="flex-none text-base font-medium w-93">
                      GIBIoefwf8ef8aw9HU8v8ebfqbjwq
                    </div>
                  </div>
                  <div className="flex flex-row justify-start">
                    <div className="text-base font-medium w-36 text-slate-400">
                      Network
                    </div>
                    <div className="flex-none text-base font-medium w-93">
                      Tron (TRC20)
                    </div>
                  </div>
                  <div className="flex flex-row justify-start">
                    <div className="text-base font-medium w-36 text-slate-400">
                      Source
                    </div>
                    <div className="flex-none text-base font-medium w-93">
                      Funding Wallet
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-5 mx-5 mb-3">
                  <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                  <div className="text-base font-medium">
                    Ensure that the address is correct and on the same network
                  </div>
                </div>
                <div className="flex flex-row items-center gap-5 mx-5 mb-8">
                  <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                  <div className="text-base font-medium">
                    Transactions cannot be cancelled
                  </div>
                </div>
                <div className="flex items-center justify-center h-16 rounded-md cursor-pointer h-18 bg-app-blue hover:bg-app-blue">
                  <div className="text-lg">confirm</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
