import React from 'react';
import BNB from "../../asssets/images/UserHome/bnb.png";

const LimitCard = () => {
	return(
    <>
      <div className="flex flex-col py-14 px-14 bg-app-black rounded-xl">
        <div className="flex flex-row justify-between">
          <div className="text-lg font-semibold ">From</div>
          <div className="flex flex-row items-center text-gray-600">
            <div className="text-xs">Spot wallet available</div>
            <svg className="w-3 h-3 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" 
                 strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
              <path stroke="none" d="M0 0h24v24H0z"/>  
              <polyline points="6 9 12 15 18 9" />
            </svg>
            <div className="text-xs">0 USDT</div>
          </div>
        </div>
        <div className="flex flex-row justify-between h-16 px-8 py-3 mt-3 rounded-lg bg-app-black-light">
          <div className="flex flex-row items-center justify-between w-3/4">
            <input className="w-full bg-app-black-light placeholder:text-gray-400" placeholder='Please enter 20-25000000'/>
            <div className="text-base text-gray-700 w-text-base">Max</div>
          </div>
          <div className="flex flex-row items-center justify-end w-1/5 gap-1">
            <img className="h-1/2" src={BNB} alt={""} />
            <div className="flex text-base">USDT</div>
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col pb-10 border-b-2 border-app-block">
          <div className="flex flex-row justify-start gap-2 mt-5">
            <div className="w-2/3">
              price
            </div>
            <div className="w-1/3">
              Expires in
            </div>
          </div>
          <div className="flex flex-row justify-start gap-2 mt-3">
            <div className="flex flex-row justify-between w-2/3 px-8 py-5 rounded-lg bg-app-black-light">
              <div className="w-3/4">
                <input className="w-full bg-app-black-light"/>
              </div>
              <div className="flex flex-row gap-1">
                <div className="flex text-base">USDT</div>
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between w-1/3 px-5 py-5 rounded-lg bg-app-black-light">
              <div className="text-base">
                1day
              </div>
              <div className="flex flex-row gap-1 items center">
                <div className="flex text-base">USDT</div>
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full -mt-6">
          <div className="flex items-center justify-center rounded-full full bg-app-black-light">
							<svg className="w-12 h-12 text-white-800"  width="24" height="24" viewBox="0 0 24 24" 
                   strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  
                <polyline points="15 4 19 4 19 8" />  
                <line x1="14.75" y1="9.25" x2="19" y2="4" />  
                <line x1="5" y1="19" x2="9" y2="15" />  
                <polyline points="15 19 19 19 19 15" />  
                <line x1="5" y1="5" x2="19" y2="19" />
              </svg>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-lg font-semibold ">To</div>
        </div>
        <div className="flex flex-row justify-between h-16 px-8 py-3 mt-3 rounded-lg bg-app-black-light">
          <div className="flex flex-row items-center justify-between w-3/4">
            <input className="w-full bg-app-black-light placeholder:text-gray-400" placeholder='Please enter 0.0004-50'/>
          </div>
          <div className="flex flex-row items-center justify-end w-1/5 gap-1">
            <img className="h-1/2" src={BNB} alt={""} />
            <div className="flex text-base">USDT</div>
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-5">
					<div>Price</div>
					<div>1BTC = 31109.2 USDT</div>
				</div>
				<div className="flex flex-row justify-between mt-3">
					<div>Inverse Price</div>
					<div>1 USDT = 0.000002433 BTC</div>
				</div>
        <div className="flex items-center justify-center h-16 mt-5 rounded-md cursor-pointer bg-app-blue hover:bg-app-blue">
				  <div className="text-lg">
				  	Place Older
				  </div>
			  </div>
        
      </div>
    </>
	)
}

export default LimitCard;
