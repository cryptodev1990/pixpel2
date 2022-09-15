import React from "react";
import { useDispatch } from "react-redux";
import { marketSuccessHandle } from '../../actions/market';

export default function MarketModal(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    props.setShowModal(false);
    dispatch(marketSuccessHandle());
  }
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
							<div className="relative flex flex-col w-full sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px] mx-auto text-lg bg-app-black rounded-xl xs:w-auto">
                <div className="flex mb-5">
                  <div className="text-xl font-medium 2xs:text-2xl">
                    Security Verification
                  </div>
                </div>
                <div className="flex flex-col gap-1 px-3 py-2 rounded-md 2xs:py-5 2xs:px-7 bg-app-black-button mb-7">
                  <div className="flex flex-row gap-3 1xs:justify-between 2xs:w-auto">
                    <div className="flex 1xs:w-1/6 ">
                      <div className="text-xs font-medium 2xs:text-base text-slate-400">
                        Amount
                      </div>
                    </div>
                    <div className="flex w-56 1xs:w-4/5">
                      <div className="text-xs font-medium 2xs:text-base">
                        Receive 19.000000 USDT (Network fee 1 UST)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 1xs:justify-between">
                    <div className="flex 1xs:w-1/6 ">
                      <div className="text-xs font-medium 2xs:text-base text-slate-400">
                        Address
                      </div>
                    </div>
                    <div className="flex w-56 1xs:w-4/5">
                      <div className="text-xs font-medium break-all 2xs:text-base 2xs:w-auto w:52">
                        GIBIoefwf8ef8aw9HU8v8ebfqbjwq
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 1xs:justify-between">
                    <div className="flex 1xs:w-1/6 ">
                      <div className="text-xs font-medium 2xs:text-base text-slate-400">
                        Network
                      </div>
                    </div>
                    <div className="flex w-56 1xs:w-4/5">
                      <div className="text-xs font-medium 2xs:text-base">
                        Tron (TRC20)
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 1xs:gap-0 1xs:justify-between">
                    <div className="flex 1xs:w-1/6 ">
                      <div className="text-xs font-medium 2xs:text-base text-slate-400">
                        Source
                      </div>
                    </div>
                    <div className="flex w-56 1xs:w-4/5">
                      <div className="text-xs font-medium 2xs:text-base">
                        Funding Wallet
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-3 text-sm font-medium 2xs:text-base">
                    Phone Number Verification Code
                  </div>
                </div>
                <div className='flex flex-row items-center justify-between h-16 px-2 py-5 mb-1 rounded-md 2xs:px-7 bg-app-black-button'>
                  <div className="flex flex-row ">
                    <input className="w-4/5 xs:w-72 bg-app-black-button"/>
                  </div>
                  <div className="text-xs 2xs:text-base text-slate-400">
                      Verification code sent
                  </div>
                </div>
                <div className="flex mb-7">
                  <div className="text-xs font-normal 2xs:text-base text-slate-400">
                    Enter the 6-digit code sent to 0997****94
                  </div>
                </div>
                <div className="flex mb-3">
                  <div className="text-base font-medium ">
                    Email Verification Code
                  </div>
                </div>
                <div className='flex flex-row items-center justify-between h-16 px-2 py-5 mb-1 rounded-md 2xs:px-7 bg-app-black-button'>
                  <div className="flex flex-row w-">
                    <input className="w-4/5 xs:w-72 bg-app-black-button"/>
                  </div>
                  <div className="text-xs 2xs:text-base text-slate-400">
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
                <div className="flex items-center justify-center h-16 rounded-md cursor-pointer bg-app-blue hover:bg-app-blue"
                     onClick={handleClick}>
		  	        	<div className="text-lg font-medium">
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