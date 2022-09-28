import React from "react";
import Button from '../../../components/Button/Button';

export default function InstantCryptoModal(props) {
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
							<div className="relative flex flex-col mx-auto bg-app-black rounded-lg w-full sm:w-[560px] sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px]">
                <div className="flex flex-row justify-between w-full">
                  <div className="text-2xl font-semibold">
                    Instant Crypto
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 mt-0 rounded-lg 2xs:-mt-3 w-1- 2xs:h-12 2xs:w-12 bg-app-black-button hover:bg-app-blue"
                       onClick={() => props.setShowModal(false)}>
                    <svg className="w-8 h-8 text-gray-400 2xs:h-10 2xs:w-10"  
                         width="24" height="24" viewBox="0 0 24 24" 
                         strokeWidth="2" stroke="currentColor" fill="none" 
                         strokeLinecap="round" strokeLinejoin="round">  
                      <path stroke="none" d="M0 0h24v24H0z"/>  
                      <line x1="18" y1="6" x2="6" y2="18" />  
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-row items-center w-full h-16 px-4 mt-12 rounded-md 2xs:px-8 bg-app-black-button">
                  <div className="text-base font-semibold ">
                    Spend:
                  </div>
                  <svg className="flex-none w-12 h-12 text-gray-400"  
                       width="24" height="24" viewBox="0 0 24 24" 
                       strokeWidth="2" stroke="currentColor" fill="none" 
                       strokeLinecap="round" strokeLinejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <line x1="12" y1="5" x2="12" y2="19" />
                  </svg>
                  <div className="text-base font-medium">
                    7 328 859.9832
                  </div>
                </div>
                <div className="flex flex-row items-center w-full h-16 px-4 mt-5 rounded-md 2xs:px-8 bg-app-black-button">
                  <div className="text-base font-semibold ">
                    Receive:
                  </div>
                  <svg className="flex-none w-12 h-12 text-gray-400"  
                       width="24" height="24" viewBox="0 0 24 24" 
                       strokeWidth="2" stroke="currentColor" fill="none" 
                       strokeLinecap="round" strokeLinejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <line x1="12" y1="5" x2="12" y2="19" />
                  </svg>
                  <div className="text-base font-medium">
                    7 328 859.9832
                  </div>
                </div>
                <div className="w-full mt-12">
                  <Button title={"CONFIRM"} selected={true} buttonStyle={"w-full h-16"} fontStyle={"text-lg font-semibold"}
                          onClick={() => props.setShowModal(false)}/>
                </div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
}