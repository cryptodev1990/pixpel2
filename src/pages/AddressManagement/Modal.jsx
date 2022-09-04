import React from "react";
import BNB from "../../asssets/images/UserHome/bnb.png";

export default function Modal(props) {
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
							<div className="relative flex flex-col gap-5 w-full max-w-lg p-4 mx-auto 
															bg-app-black rounded-xl shadow-lg px-8 py-12 text-lg">
								<div className="flex flex-row rounded-md h-16 items-center justify-center px-3 bg-app-black-button">
              		<div className="flex xs:h-1/2 h-6 mx-3">
                		<img src={BNB} alt="BNB" />
              		</div>
									<div className="ml-1">
										BTC BITCOIN
									</div>
									<div>
										<svg className="h-4 w-4"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" 
												fill="none" strokeLinecap="round" strokeLinejoin="round">  
											<path stroke="none" d="M0 0h24v24H0z"/>  
											<polyline points="6 9 12 15 18 9" />
										</svg>
									</div>
            		</div>
								<div className="flex flex-col">
									<div>
										Wallet Address
									</div>
									<input className="rounded-md  h-16 pl-4 bg-app-black-button placeholder:text-slate-600 
																		focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" 
													placeholder="Enter Address Here"/>
								</div>
								<div className="flex flex-col">
									<div>
										Network
									</div>
									<input className="rounded-md h-16 pl-4 bg-app-black-button placeholder:text-slate-600 
																		focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" 
													placeholder="Enter Address Here"/>
								</div>
								<div className="flex flex-col">
									<div>
										Wallet Name
									</div>
									<input className="rounded-md h-16 pl-4 bg-app-black-button placeholder:text-slate-600 
																		focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" 
													placeholder="Enter Address Here"/>
								</div>
								<div className="flex rounded-md h-16 items-center px-3 bg-blue-500 justify-center mt-7 hover:cursor-pointer">
									<div>
										ADD 
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