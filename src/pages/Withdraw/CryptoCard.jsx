import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BNB from "../../asssets/images/UserHome/bnb.png";
import { useNavigate } from "react-router-dom";
import { withdrawShowModal } from "../../actions/withdraw";
import DropDownButton from "./DropDownButton";

const networkList = [
  {
    id: 1,
    title: "111111111111",
  },
  {
    id: 2,
    title: "222222222222",
  },
  {
    id: 3,
    title: "33333333333",
  },
  {
    id: 4,
    title: "44444444444",
  },
];

const CryptoCard = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const handleClickWithdraw = () => {
    dispatch(withdrawShowModal());
    navigate("/swap-master?x=Liquidity&y=3", { replace: true });
  };

  return (
    <>
      <div className="flex flex-col px-12 py-12 bg-app-black rounded-xl">
        <div className="flex justify-start mb-1">
          <div className="text-lg font-medium">Crypto</div>
        </div>
        <div className="flex flex-row justify-between h-16 px-5 py-5 mb-8 rounded-md bg-app-black-light">
          <div className="flex flex-row gap-2">
            <img src={BNB} alt={""} />
            <div className="text-base font-medium">PIXP</div>
          </div>
          <div className="flex">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-start mb-1">
          <div className="text-lg font-medium">Wallet Address</div>
        </div>
        <div className="flex h-16 px-5 py-5 mb-8 rounded-md bg-app-black-light">
          <input
            className="w-full bg-app-black-light placeholder:text-slate-700"
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
        <div className="flex flex-row justify-between h-16 px-5 py-5 mb-1 rounded-md bg-app-black-light">
          <div className="flex flex-row w-full">
            <div className="flex flex-row gap-1">
              <img src={BNB} alt={""} />
              <div className="text-base font-medium ">PIXP</div>
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <svg
                className="w-12 h-12 text-gray-700"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="12" y1="5" x2="12" y2="19" />
              </svg>
            </div>
            <div className="flex gap-2">
              <input
                className="w-72 bg-app-black-light placeholder:text-slate-700"
                placeholder="1,000,000,000"
              />
              <div className="text-base font-medium text-blue-900">MAX</div>
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
            <input type="radio" value="startAccount" name="account" />
            <div className="text-lg font-medium">Start Account</div>
          </div>
          <div className="text-lg font-medium">3 000 PIXP</div>
        </div>
        <div className="flex flex-row justify-between mb-8">
          <div className="flex flex-row items-center gap-4">
            <input type="radio" value="tradingAccount" name="account" />
            <div className="text-lg font-medium">Trading Account</div>
          </div>
          <div className="text-lg font-medium">500 PIXP</div>
        </div>
        <div className="flex flex-row justify-between mb-1">
          <div className="text-lg font-medium">500 PIXP</div>
          <div className="text-2xl font-semibold">27 854 853.958 PIXP</div>
        </div>
        <div className="flex flex-row justify-end mb-5">
          <div className="text-sm font-normal text-gray-500">
            24 853.853 USDT Network Fee
          </div>
        </div>
        <div
          className="flex items-center justify-center h-16 rounded-md cursor-pointer bg-app-blue hover:bg-app-blue"
          onClick={handleClickWithdraw}
        >
          <div className="text-lg">Withdraw</div>
        </div>
      </div>
    </>
  );
};

export default CryptoCard;
