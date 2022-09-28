import React from "react";
import SUS from "../../../asssets/images/FrameRed.svg";
import PaymentMethod from "./PaymentMethod";
import Tick from "../../../asssets/images/UserHome/Capture.PNG";
import { useNavigate } from 'react-router-dom';
  
const OrderCompleted = () => {
  let navigate = useNavigate();
  const handleClick = () => {
   navigate("/wallet");
  }
  return(
    <div className="flex justify-center w-full mt-10">
      <div className="w-4/5">
        <div className="flex flex-col justify-start gap-2 mb-5 2xs:flex-row">
          <div className="flex flex-row items-center gap-3 px-5 py-2 rounded-md bg-app-black w-max">
            <div>
              Order Completed
            </div>
            <img src={SUS} alt={""}/>
          </div>
          <div className="flex items-end text-sm text-gray-500">
            Successfully received 1 BTC
          </div>     
        </div>
        <div className="flex justify-end mb-5">
          <div className="px-5 py-2 rounded-md bg-app-black">
            Order n' - 111111
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 mb-10 sm:flex-row">
          <div className="flex items-end -mt-1 border-b-2 border-gray-500 sm:w-auto w-max">
            <div className = "text-2xl text-red-500">
              SELL BTC RECEIVE MXN
            </div>
          </div>
          <div className="px-5 py-2 rounded-md bg-app-black sm:w-auto w-max">
            Time Created-2022/05/13
          </div>
        </div>
        <div className="flex flex-col w-full gap-5 py-2 mb-16 overflow-x-auto 2xs:flex-row lg:overflow-x-visible">
          <div className="flex flex-col w-full gap-5">
            <div className="text-lg font-semibold">
                Order Information
            </div>
            <div className="flex flex-row justify-between gap-1 p-5 rounded-md 2xs:w-full bg-app-black w-max">
               <div className="flex flex-col gap-2">
                 <div className="text-sm text-gray-500">
                   Pay
                 </div>
                 <div className="text-base text-red-500">
                   30,000 MXN
                 </div>
               </div>
               <div className="flex flex-col gap-2">
                 <div className="text-sm text-gray-500">
                   Receive
                 </div>
                 <div className="text-base">
                   1 BTC
                 </div>
               </div>
               <div className="flex flex-col gap-2">
                 <div className="text-sm text-gray-500">
                   Token Price
                 </div>
                 <div className="text-base">
                   30,000 MXN
                 </div>
               </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end w-1/2 gap-2">
            <div className="p-3 rounded-md w-max bg-app-black-light">
              Completed
            </div>
            <div className="text-base text-blue-500 border-b-2 border-blue-500 cursor-pointer w-max" onClick={handleClick}>
              Check Wallet
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-5 overflow-x-auto overflow-y-hidden lg:flex-row">
          <div className="xs:w-full lg:w-3/5 w-120">
           <PaymentMethod/>
          </div>
          <div className="relative rounded-md xs:w-full lg:w-2/5 bg-app-black w-120">
            <div className="absolute w-full h-full border-t-2 border-gray-500 top-28"></div>
            <div className="w-full h-full p-8 pb-10">
              <div className="relative w-full h-full">
                <div className="flex flex-row w-full gap-1 p-2 rounded-md h-14 bg-app-black-button">
                  <img className=""  src={Tick} alt={""}/>
                  <div className="flex items-center">
                    Cerstkom
                  </div>
                </div>
                <div className="flex justify-start w-full mt-52">
                  <div className="flex flex-row gap-3 px-3 py-3 rounded-md w-max bg-app-black-button h-max">
                    <div className="flex items-center text-lg">
                      Hello  
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      13.45
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-full mt-4">
                  <div className="flex flex-row gap-3 px-3 py-3 rounded-md w-max bg-app-black-button h-max">
                    <div className="flex items-center text-lg">
                      Hello  
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      13.45
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-full mt-4">
                  <div className="flex flex-row gap-3 px-3 py-3 rounded-md w-max bg-app-black-button h-max">
                    <div className="flex items-center text-lg">
                      Good Morning  
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      13.45
                    </div>
                  </div>
                </div>
                <div className="flex justify-start w-full mt-4">
                  <div className="flex flex-row gap-3 px-3 py-3 rounded-md w-max bg-app-black-button h-max">
                    <div className="flex items-center text-lg">
                      Already Paid  
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      13.45
                    </div>
                  </div>
                </div>
                  <div className="absolute bottom-0 flex flex-row justify-between w-full p-5 rounded-md h-14 bg-app-black-button">
                  <div className="flex items-center w-full ml-5">
                    <input className="w-full bg-app-black-button placeholder:text-white" placeholder="Write message"/>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex items-center text-5xl text-blue-500">
                      +
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full">
                      <svg className="w-8 h-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCompleted;