import React from 'react';
import BNB from '../../asssets/images/UserHome/bnb.png'

const FlatCard = () => {
  return(
    <>
      <div className="flex flex-col px-12 py-12 bg-app-black rounded-xl">
        <div className="flex justify-start mb-1">
          <div className="text-lg font-medium">
            Crypto
          </div>
        </div>
        <div className="flex flex-row justify-between h-16 px-5 py-5 mb-8 rounded-md bg-app-black-light">
          <div className="flex flex-row gap-2">
            <img src={BNB} alt={""}/>
            <div className="text-base font-medium">
              PIXP
            </div>
          </div>
          <div className="flex">
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="flex justify-start mb-1">
          <div className="text-lg font-medium">
            Method
          </div>
        </div>
        <div className="flex h-16 px-5 py-5 mb-8 rounded-md bg-app-black-light">
          <input className="w-full bg-app-black-light placeholder:text-slate-700" placeholder='Bank Transfer'/>
        </div>
        <div className="flex justify-start mb-1">
          <div className="text-lg font-medium">
            Method
          </div>
        </div>
        <div className="flex h-16 px-5 py-5 mb-8 rounded-md bg-app-black-light">
          <input className="w-full bg-app-black-light placeholder:text-slate-700" placeholder='HSBC Hong Kong'/>
        </div>
        <div className="flex justify-start mb-1">
          <div className="text-lg font-medium">
            Withdraw Amount
          </div>
        </div>
        <div className="flex flex-row justify-between h-16 px-5 py-5 mb-1 rounded-md bg-app-black-light">
          <div className="flex flex-row w-full">
            <div className="flex flex-row gap-1">
              <img src={BNB} alt={""}/>
              <div className="text-base font-medium ">
                PIXP
              </div>
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center">
              <svg className="w-12 h-12 text-gray-700" width="10" height="10" viewBox="0 0 24 24" 
                      strokeWidth="2" stroke="currentColor" fill="none" 
                      strokeLinecap="round" strokeLinejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z" />  
                    <line x1="12" y1="5" x2="12" y2="19" />
              </svg>
            </div>
            <div className="flex gap-2">
              <input className="w-72 bg-app-black-light placeholder:text-slate-700" placeholder='1,000,000,000'/>
              <div className="text-base font-medium text-blue-900">
                MAX
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-8">
          <div className="text-sm text-slate-500">
            Balance: 233,319,129.9022
          </div>
        </div>
        <div className="flex flex-row justify-between mb-2">
          <div className="flex flex-row items-center gap-4">
            <div className="text-lg font-medium">
              Commission
            </div>
          </div>
          <div className="text-lg font-medium">
            5%
          </div>
        </div>
        <div className="flex flex-row justify-between mb-5">
          <div className="flex flex-row items-center gap-4">
            <div className="text-lg font-medium">
              You recieve
            </div>
          </div>
          <div className="text-lg font-medium">
            950.000 USD
          </div>
        </div>
        <div className="flex flex-row justify-start gap-2 mb-12">
          <input type="checkbox" className="appearance-none checked:bg-blue-500" />
          <div className="text-base font-normal text-gray-400">
            I have read and I accept terms.
          </div>
        </div>
        <div className="flex items-center justify-center h-16 rounded-md cursor-pointer bg-app-blue hover:bg-app-blue">
		  		<div className="text-lg">
		  			Withdraw
		  		</div>
		  	</div>
      </div>
    </>
  )
}
export default FlatCard;