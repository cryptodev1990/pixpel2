import React from "react";

export default function WithdrawalModal(props) {
  
  
	return (
		<>
			{ props.showModal ? (
				<>
					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div
							className="fixed inset-0 w-full h-full bg-black opacity-40"
							onClick={() => props.setShowModal(false)}
						></div>
						<div className="flex items-center min-h-screen px-4 py-8">
							<div className="relative flex flex-col w-full px-4 py-4 mx-auto text-lg shadow-lg 2xs:py-10 2xs:px-10 bg-app-black-modal rounded-xl sm:w-auto">
                <div className="flex justify-start mb-5">
                  <div className="text-2xl font-medium">
                    Withdraw
                  </div>
                </div>
                <div className="flex flex-col px-4 py-3 mb-5 text-xs rounded-md 2xs:py-5 2xs:px-8 2xs:text-base bg-app-black">
                  <div className="flex flex-row justify-between">
                    <div className="flex-none w-16 font-medium 2xs:w-20 text-slate-400">
                      Amount
                    </div>
                    <div className="font-medium w-93">
                      Receive 19.000000 USDT (Network fee 1 UST)
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex-none w-16 font-medium 2xs:w-20 text-slate-400">
                      Address
                    </div>
                    <div className="font-medium break-all w-93">
                      GIBIoefwf8ef8aw9HU8v8ebfqbjwq
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex-none w-16 font-medium 2xs:w-20 text-slate-400">
                      Network
                    </div>
                    <div className="font-medium w-93">
                      Tron (TRC20)
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex-none w-16 font-medium 2xs:w-20 text-slate-400">
                      Source
                    </div>
                    <div className="font-medium w-93">
                      Funding Wallet
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-5 mx-5 mb-3">
                  <div className="flex-none w-3 h-3 bg-blue-700 rounded-full"></div>
                  <div className="text-xs font-medium 2xs:text-base">
                    Ensure that the address is correct and on the same network
                  </div>
                </div>
                <div className="flex flex-row items-center gap-5 mx-5 mb-8">
                  <div className="flex-none w-3 h-3 bg-blue-700 rounded-full"></div>
                  <div className="text-xs font-medium 2xs:text-base">
                    Transactions cannot be cancelled
                  </div>
                </div>
                <div className="flex items-center justify-center h-16 rounded-md cursor-pointer h-18 bg-app-blue hover:bg-app-blue"
                     onClick={() => props.setShowModal(false)}>
                  <div className="text-lg">
                    confirm
                  </div>
                </div>
							</div>
						</div>
					</div>
				</>
			  ) : null}
		</>
	);
}