import React from 'react';
import ImageDropDownButton from "../../components/DropDown/ImageDropDownButton";
import DropdownButton from "../../components/DropDown/DropDownButton";

const currencyList = [
  {
    id:1,
    title:"USDT",
  },
  {
    id:1,
    title:"USDT",
  },
  {
    id:1,
    title:"USDT",
  },
  {
    id:1,
    title:"USDT",
  },
]
const fromTokenList = [
  {
    id:1,
    title:"USDT",
    url:"../../assets/images/UserHome/bnb.png",
  },
  {
    id:2,
    title:"USDT",
    url:"../../assets/images/UserHome/bnb.png",
  },
  {
    id:3,
    title:"USDT",
    url:"../../assets/images/UserHome/bnb.png",
  },
]

const toTokenList = [
  {
    id:1,
    title:"USDT",
    url:"../../assets/images/UserHome/bnb.png",
  },
  {
    id:2,
    title:"USDT",
    url:"../../assets/images/UserHome/bnb.png",
  },
  {
    id:3,
    title:"USDT",
    url:"../../assets/images/UserHome/bnb.png",
  },
]

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
        <div className="flex flex-row items-center justify-between h-16 py-3 pl-8 mt-3 rounded-lg bg-app-black-button">
          <div className="flex flex-row items-center justify-between w-125">
            <input className="w-full bg-app-black-button placeholder:text-gray-400" placeholder='Please enter 20-25000000'/>
            <div className="text-base text-gray-500 w-text-base">Max</div>
          </div>
          <ImageDropDownButton initialContent={fromTokenList[0]} contentList={fromTokenList} backgroundColor={" bg-app-black-button"}/>
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
            <div className="flex flex-row items-center justify-between w-2/3 h-16 py-5 pl-8 rounded-lg bg-app-black-button">
              <div className="w-3/4">
                <input className="w-full bg-app-black-button"/>
              </div>
              <DropdownButton initialContent={currencyList[0].title} contentList={currencyList}/>
            </div>   
            <div className="flex flex-row items-center justify-between w-1/3 h-16 py-5 pl-5 rounded-lg bg-app-black-button">
              <div className="text-base">
                1day
              </div>
              <DropdownButton initialContent={currencyList[0].title} contentList={currencyList}/>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full -mt-6">
          <div className="flex items-center justify-center rounded-full full bg-app-black-button">
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
        <div className="flex flex-row items-center justify-between h-16 py-3 pl-8 mt-3 rounded-lg bg-app-black-button">
          <div className="flex flex-row items-center justify-between w-3/4">
            <input className="w-full bg-app-black-button placeholder:text-gray-400" placeholder='Please enter 0.0004-50'/>
          </div>
          <ImageDropDownButton initialContent={toTokenList[0]} contentList={toTokenList} backgroundColor={" bg-app-black-button"}/>
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
