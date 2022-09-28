import { Button } from "../../../components";
import React from "react";
import BankSingleCard from "./BankSingleCard";
import Tick from "../../../asssets/images/UserHome/Capture.PNG";
import Line from "../../../asssets/images/Line.png";
import { useAppContext } from "../../../contexts/AppContext";

const ReleaseAssets = ({handleReleaseClick, handleCancelClick}) => {
  const context = useAppContext();
  return(
    <div className="flex justify-center w-full mt-10">
      <div className="w-4/5">
        <div className="flex justify-start mb-5">
          <div className="px-5 py-2 rounded-md bg-app-black">
            15:43:16 - Waiting Payment Confirimation
          </div>
        </div>
        <div className="flex justify-end mb-5">
          <div className="px-5 py-2 rounded-md bg-app-black">
            Order n' - 111111
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 mb-10 sm:flex-row">
          <div className="flex items-end -mt-1 border-b-2 border-gray-500 sm:w-auto w-max">
            <div className = "text-2xl text-green-500">
              BUY BTC WITH MXN
            </div>
          </div>
          <div className="px-5 py-2 rounded-md bg-app-black sm:w-auto w-max">
            Time Created-2022/05/13
          </div>
        </div>
        <div className="flex flex-col justify-start w-full gap-5 mb-16 overflow-x-auto lg:flex-row lg:overflow-x-visible">
          <div className="flex flex-col w-full gap-5 lg:w-1/2">
             <div className="text-lg font-semibold">
                Order Information
             </div>
             <div className="flex flex-row justify-between gap-1 p-5 rounded-md 2xs:w-full bg-app-black w-max">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-500">
                    Pay
                  </div>
                  <div className="text-base text-green-500">
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
          <div className="flex flex-col justify-center gap-5 lg:-mb-10">
            <div className="p-3 rounded-md w-max bg-app-black-light">
              To Be Released
            </div>
            <div className="text-sm text-gray-500">
                Expected to receive assets in 14 minutes
            </div>
          </div>
        </div>
        <div className="mb-5 text-lg font-semibold">
          Pay to the account below:
        </div>
        <div className="flex flex-col justify-between w-full gap-10 overflow-x-auto overflow-y-hidden lg:flex-row">
          <div className="flex flex-col w-120 xs:w-full lg:w-3/5">
            <BankSingleCard/>
            <div className="relative z-10 flex flex-row w-full gap-10 mt-10">
              <div className="relative flex flex-col w-1/3 p-5 text-base font-semibold rounded-sm bg-app-black">
                <div>
                  PLACED
                </div>
                <div>
                  ORDER
                </div>
                <div className="absolute bottom-0 right-5">
                  <div className="text-5xl font-extrabold text-gray-500 ">
                    1
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col w-1/3 p-5 text-base font-semibold rounded-sm bg-app-black">
                <div>
                  CONFIRM AND
                </div>
                <div>
                  TRANSFER
                </div>
                <div>
                  FUNDS
                </div>
                <div className="absolute bottom-0 right-5">
                  <div className="text-5xl font-extrabold text-gray-500 ">
                    2
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col w-1/3 p-5 text-base font-semibold rounded-sm bg-app-black">
                <div>
                  RELEASE
                </div>
                <div>
                  ASSETS
                </div>
                <div className="absolute bottom-0 right-5">
                  <div className="text-5xl font-extrabold text-gray-500 ">
                    3
                  </div>
                </div>
              </div>
              <div className="absolute w-full bottom-12 -z-10">
                <hr/>
              </div>
            </div>
            <div className="flex flex-row items-center mt-16 mb-10">
              <Button title={"RELEASE ASSETS"} selected={true} buttonStyle={"text-sm px-4 py-3"} onClick={() => {context.setOrderBuyState(1)}}/>
            </div>
            <div className="flex flex-row items-center justify-start gap-10">
              <div className="flex items-end border-b-2 cursor-pointer border-sky-500 w-max text-sky-500"
                   onClick={() => {context.setBuyCryptoState(1)}}>
                APPEAL
              </div>
              <img src={Line} alt={''}/>
              <div className="flex items-end border-b-2 cursor-pointer border-sky-500 w-max text-sky-500"
                   onClick={() => {context.setBuyCryptoState(1)}}>
                CANCEL ODER
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 px-3 py-5 mt-10 rounded-lg bg-app-black">
              <div className="font-semibold">
                Tips
              </div>
              <div className="flex flex-col gap-1 px-2 text-sm ">
                <div className="text-gray-500">
                  1. Please do not include any information about BTC, ETH, USDT, BNB and any other digital asset names 
                  in the transfer notes to prevent payment from being intercepted or bank funds being frozen.
                </div>
                <div className="text-gray-500">
                  2. Please do not include any information about BTC, ETH, USDT, BNB and any other digital asset names 
                  in the transfer notes to prevent payment from being intercepted or bank funds being frozen.
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-md xs:w-full lg:w-2/5 h-235 bg-app-black w-120">
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
                      Paid  
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      13.45
                    </div>
                  </div>
                </div>
                <div className="flex justify-start w-full mt-4">
                  <div className="flex flex-row gap-3 px-3 py-3 rounded-md w-max bg-app-black-button h-max">
                    <div className="flex items-center text-lg">
                      Great, thanks.  
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

export default ReleaseAssets;