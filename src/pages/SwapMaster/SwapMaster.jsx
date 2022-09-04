import React from "react";
import "./SwapMaster.scss"

const SwapMaster = () => {
	return (
		<>
			<div className="flex flex-row justify-center py-16">
				<div className="flex grid w-1/12 h-16 items-center justify-items-center">
					<div className="flex grid bg-app-black h-12 w-12 rounded-xl items-center justify-items-center">
						<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
						</svg>
					</div>
				</div>
				<div className="flex flex-col w-1/2 gap-10">
					<div className="flex justify-center text-4xl ">
						Swap Master
					</div>
					<div className="flex flex-row justify-center gap-4">
						<div className="bg-blue-500 text-white w-24 rounded-md hover:bg-app-blue cursor-pointer">
							<div className="flex truncate justify-center items-center gap-2 h-12">
								MARKET
							</div>
						</div>
						<div className="bg-app-black text-white w-16 rounded-md hover:bg-app-blue cursor-pointer">
							<div className="flex truncate justify-center items-center gap-2 h-12">
								LIMIT
							</div>
						</div>
						<div className="bg-app-black text-white w-24 rounded-md hover:bg-app-blue cursor-pointer">
							<div className="flex truncate justify-center items-center gap-2 h-12">
								LIQUIDITY
							</div>
						</div>
					</div>
					<div className="flex justify-center my-5">
						<div className="flex flex-col w-5/6 h-max bg-app-black rounded-xl px-6 py-8 gap-3">
							<div className="flex flex-row justify-between">
								<div>
									From
								</div>
								<div>
									Balance:233,319,129,9022
								</div>
							</div>
							<div className="flex flex-row h-max bg-app-black-light rounded-md rounded-x1">
								<div className="flex items-center justify">
									<img className="h-1/2" src="./assets/images/UserHome/avax.png" />
								</div>
								<div className="flex items-center pr-2">
									AVA
								</div>
								<div className="flex items-center">
									<svg class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
								<div>
									<svg class="h-10 w-10 text-gray-700" width="10" height="10" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="12" y1="5" x2="12" y2="19" /></svg>
								</div>
								<div class="flex h-full pt-2">
									<input class="bg-app-black-light"/>
								</div>
								<div className="w-1/4 grid justify-items-end ">
									<div className="flex justify text-blue-700">
										Max
									</div>
								</div>
							</div>
							<div className="flex justify-center">
								<div className="rounded-full bg-app-black-light w-8">
									<svg class="h-8 w-8 text-white-800"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 4 19 4 19 8" />  <line x1="14.75" y1="9.25" x2="19" y2="4" />  <line x1="5" y1="19" x2="9" y2="15" />  <polyline points="15 19 19 19 19 15" />  <line x1="5" y1="5" x2="19" y2="19" /></svg>
								</div>
							</div>
							<div className="flex flex-row justify-between">
								<div>
									To
								</div>
								<div>
									Balance:229,9022
								</div>
							</div>
							<div className="flex flex-row h-max bg-app-black-light rounded-md rounded-x1">
								<div className="flex items-center justify">
									<img className="h-1/2" src="./assets/images/UserHome/bnb.png" />
								</div>
								<div className="flex items-center pr-2">
									PIXP
								</div>
								<div className="flex items-center">
									<svg class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
									</svg>
								</div>
								<div>
									<svg class="h-10 w-10 text-gray-700" width="10" height="10" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="12" y1="5" x2="12" y2="19" /></svg>
								</div>
								<div class="flex h-full pt-2">
									<input class="bg-app-black-light"/>
								</div>
							</div>
							<div className="border-b-2 border-app-black">
								<div className="flex flex-row justify-between">
									<div>
										Price
									</div>
									<div>
										1BTC = 31109.2 USDT
									</div>
								</div>
								<div className="flex flex-row justify-between">
									<div>
										Inverse Price
									</div>
									<div>
										1USDT = 0.000002433 BTC
									</div>
								</div>
								<div className="flex flex-row justify-between">
									<div>
										You will receive
									</div>
									<div>
										27.13990533
									</div>
								</div>
							</div>
							<div className="text-gray-500">
								Please confirm conversion within the time
							</div>
							<div>
								<div className="bg-blue-500 text-white w-full rounded-md hover:bg-app-blue cursor-pointer">
									<div className="flex truncate justify-center items-center h-12">
										Confirm
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</>
		
	)
}
export default SwapMaster