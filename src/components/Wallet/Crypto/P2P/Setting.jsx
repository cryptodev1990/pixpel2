import React from "react";
import BNB from "../../../../asssets/images/UserHome/bnb.png";

const Setting = () => {
  return (
    <div className="flex gap-7">
      <div className="flex flex-col gap-2">
        <div>Amount</div>
        <div className="rounded flex items-center px-3 bg-app-black-button py-3">
          <div className="text-gray-400 mr-2 text-sm">Enter Amount</div>
          <div className=" border-r-2 px-3 border-gray-500 mr-2">UAH</div>
          <div className="text-app-blue">Search</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Fiat</div>
        <div className="rounded flex items-center px-3 bg-app-black-button py-3">
          <img src={BNB} className="h-5 w-5 mr-2" alt="BNB" />
          <div className="mr-3">BNB</div>
          <svg
            className="h-4 w-4 text-gray-700"
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
      <div className="flex flex-col gap-2">
        <div>Fiat</div>
        <div className="rounded flex items-center px-3 bg-app-black-button py-3">
          <div className="mr-3">Monobank</div>
          <svg
            className="h-4 w-4 text-gray-700"
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
    </div>
  );
};

export default Setting;
