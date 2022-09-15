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
							<div className="relative flex flex-col mx-auto text-lg shadow-lg bg-app-black rounded-xl w-158 sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px]">
                <div className="flex justify-center mb-2 2xs:mb-7 2xs:justify-start">
                  <div className="text-lg font-medium 2xs:text-2xl">
                    LP tokens in your wallet
                  </div>
                </div>        
                <div className="flex flex-row justify-between py-5 mb-5 rounded-md px-7 bg-app-black-button">
                  <div className="flex flex-row items-center gap-1">
                    <img className="2xs:h-2/3 h-2/5" src={BNB} alt={""}/>
                    <div className="text-xs font-normal 2xs:text-base">
                      BNB/PIXP
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-xs font-medium text-blue-700 2xs:text-base">
                      1.368
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between py-5 mb-2 rounded-md px-7 bg-app-black-button">
                  <div className="text-xs font-normal 2xs:text-base">
                    Share of Pool
                  </div>
                  <div className="text-xs font-medium text-blue-700 2xs:text-base">
                    100.000000%
                  </div>
                </div>
                <div className="flex flex-row justify-between py-5 mb-2 rounded-md px-7 bg-app-black-button">
                  <div className="text-xs font-normal 2xs:text-base">
                    Pooled BNB
                  </div>
                  <div className="text-xs font-medium text-blue-700 2xs:text-base">
                    0.001248
                  </div>
                </div>
                <div className="flex flex-row justify-between py-5 mb-5 rounded-md px-7 bg-app-black-button">
                  <div className="text-xs font-normal 2xs:text-base">
                    Pooled PIXP
                  </div>
                  <div className="text-xs font-medium text-blue-700 2xs:text-base">
                    15.7531
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-md cursor-pointer h-14 bg-app-blue hover:bg-app-blue"
                     onClick={() => props.setShowCreateModal(false)}>
                  <div className="text-lg">
                    close
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