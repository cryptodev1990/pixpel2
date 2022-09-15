import React, { useState } from "react";
import DropDownButton from "./DropDownButton";
import WithdrawalModal  from "./WithdrawalModal";
import ImageDropDownButton from "../../components/DropDown/ImageDropDownButton";
import TokenDropdownInput from "../../components/DropDown/TokenDropdownInput";

const tokenList = [
  {
    id: 1,
    title: "AVA",
    url: "../../assets/images/UserHome/avax.png",
  },
  {
    id: 2,
    title: "AVA",
    url: "../../assets/images/UserHome/avax.png",
  },
  {
    id: 3,
    title: "AVA",
    url: "../../assets/images/UserHome/avax.png",
  },
];

const networkList = [
  {
    id: 1,
    title: "BSC/BNB SMART CHAIN (EBS 20)",
  },
  {
    id: 2,
    title: "BSC/BNB SMART CHAIN (EBS 20)",
  },
  {
    id: 3,
    title: "BSC/BNB SMART CHAIN (EBS 20)",
  },
  {
    id: 4,
    title: "BSC/BNB SMART CHAIN (EBS 20)",
  },
];

const CryptoCard = () => {

  const[showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full px-12 py-12 bg-app-black rounded-xl sm:w-155">
        <div className="flex justify-start mb-1">
          <div className="text-lg font-medium">Crypto</div>
        </div>
        <div className="w-full mb-8">
         <ImageDropDownButton initialContent={tokenList[0]} contentList={tokenList} backgroundColor={" bg-app-black-button"}/>
        </div>  
        <div className="flex justify-start mb-1">
          <div className="text-lg font-medium">Wallet Address</div>
        </div>
        <div className="flex h-16 px-5 py-5 mb-8 rounded-md bg-app-black-button">
          <input
            className="w-full bg-app-black-button placeholder:text-slate-500"
            placeholder="Enter Address Here"
          />
        </div>
        <div className="flex justify-start mb-1">
          <div className="text-lg font-medium">Network</div>
        </div>
        <DropDownButton
          initialContent="Select Withdraw Network"
          contentList={networkList}
        />
        <div className="flex justify-start mt-8 mb-1">
          <div className="text-lg font-medium">Withdraw Amount</div>
        </div>
        <div className="flex flex-row mb-1 ">
          <TokenDropdownInput initialContent={tokenList[0]} contentList={tokenList}/>
        </div>
        <div className="flex justify-end mb-8">
          <div className="text-sm text-slate-500">
            Balance: 233,319,129.9022
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-1 mb-2">
          <div className="flex flex-row items-center gap-4">
            <input className="flex-none" type="radio" value="startAccount" name="account" />
            <div className="text-xs font-medium 2xs:text-lg">Start Account</div>
          </div>
          <div className="text-xs font-medium 2xs:text-lg">3 000 PIXP</div>
        </div>
        <div className="flex flex-row items-center justify-between mb-8">
          <div className="flex flex-row items-center gap-4">
            <input className="flex-none" type="radio" value="tradingAccount" name="account" />
            <div className="text-xs font-medium 2xs:text-lg">Trading Account</div>
          </div>
          <div className="text-xs font-medium 2xs:text-lg">500 PIXP</div>
        </div>
        <div className="flex flex-row justify-between mb-1">
          <div className="text-lg font-medium">500 PIXP</div>
          <div className="text-lg font-semibold 1xs:text-2xl 2xs:text-xl">27 854 853.958 PIXP</div>
        </div>
        <div className="flex flex-row justify-end mb-5">
          <div className="text-sm font-normal text-gray-500">
            24 853.853 USDT Network Fee
          </div>
        </div>
        <div
          className="flex items-center justify-center h-16 rounded-md cursor-pointer bg-app-blue hover:bg-app-blue"
          onClick={() => setShowModal(true)}
        >
          <div className="text-lg">Withdraw</div>
        </div>
      </div>
      <WithdrawalModal showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
};

export default CryptoCard;
