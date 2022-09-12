import React from 'react';

const MarketSuccessCard = () => {
	return(
    <>
      <div className="flex flex-col items-center px-12 py-12 bg-app-black rounded-xl" style={{width:"521px", height:"559px"}}>
        <div className='flex mb-4 border-2 border-dashed rounded-full border-emerald-500' 
             style={{width:"130px", height:"130px", paddingTop:"13px",paddingRight:"14px",paddingBottom:"14px",paddingLeft:"14px"}}>
          <div className='flex px-2 py-3 rounded-full bg-emerald-500' style={{width:"100px", height:"100px"}}>
            <svg className="w-20 h-20 text-white"  viewBox="0 0 24 24"  fill="none"  
                 stroke="currentColor"  strokeWidth="0.5"  strokeLinecap="round"  strokeLinejoin="round">  
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center mb-5">
          <div className="text-2xl font-semibold">
            Successful
          </div>
        </div>
        <div className="flex justify-center mb-1">
          <div className="text-lg font-normal text-slate-400">
            You will spend
          </div>
        </div>
        <div className="flex justify-center mb-5">
          <div className="text-2xl font-medium">
            27.13898 USDT
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mb-3">
          <div className="text-sm font-normal">
            Converted
          </div>
          <div className="text-sm font-normal">
            0.00065871 BTC
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mb-3">
          <div className="text-sm font-normal">
            Price
          </div>
          <div className="text-sm font-normal">
            1 USDT = 0.00002427 BTC
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mb-5">
          <div className="text-sm font-normal">
            Inverse Price
          </div>
          <div className="text-sm font-normal">
            1 BTC = 41201.8 USDT
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center justify-center h-16 px-20 py-5 rounded-lg bg-app-black-light hover:bg-app-blue">
            <div className="text-lg font-medium">
              Back
            </div>
          </div>
          <div className="flex items-center justify-center h-16 px-12 py-5 bg-blue-500 rounded-lg hover:bg-app-blue">
            <div className="text-lg font-medium">
              View Status
            </div>
          </div>
        </div>
		  </div>
    </>
			
	)
}

export default MarketSuccessCard;
