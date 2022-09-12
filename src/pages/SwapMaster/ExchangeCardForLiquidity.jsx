import React from "react";
import XRP from "../../asssets/images/UserHome/bnb.png";
import PIXP from "../../asssets/images/UserHome/xrp.png";

const balance = {
  avaBalance: "233,319,129.9022",
  pixpBalance: "299.9022",
};

const ExchangeCardForLiquidity = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center h-16 px-5 py-5 mb-1 rounded-md bg-app-black-light ">
          <div className="flex flex-row gap-2">
            <div className="flex w-6 h-full">
              <img src={PIXP} alt={""} />
            </div>
            <div className="flex text-base">PIXP</div>
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
          <div className="flex">
            <svg
              className="w-10 h-10 text-gray-700"
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
          <div className="flex flex-row justify-stratch gap-7">
            <input className="w-80 bg-app-black-light" />
          </div>
        </div>
        <div className="flex flex-row justify-end mb-3 h-7">
          <div className="h-full text-sm text-slate-400">
            Balance: {balance.avaBalance}
          </div>
        </div>
        <div className="flex justify-center w-full mb-5">
          <div
            className="flex items-center justify-center rounded-full full bg-app-black-light"
            style={{ marginBottom: "10px", width: "53px", height: "53px" }}
          >
            <svg
              className="w-12 h-12 text-white-800"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="15 4 19 4 19 8" />{" "}
              <line x1="14.75" y1="9.25" x2="19" y2="4" />{" "}
              <line x1="5" y1="19" x2="9" y2="15" />
              <polyline points="15 19 19 19 19 15" />
              <line x1="5" y1="5" x2="19" y2="19" />
            </svg>
          </div>
        </div>
        <div className="flex flex-row items-center h-16 px-5 py-5 mb-1 rounded-md bg-app-black-light ">
          <div className="flex flex-row gap-2">
            <div className="flex w-6 h-full">
              <img src={XRP} alt={""} />
            </div>
            <div className="flex text-base">BNB</div>
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
          <div className="flex">
            <svg
              className="w-10 h-10 text-gray-700"
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
          <div className="flex flex-row justify-between gap-7">
            <input className="w-72 bg-app-black-light" />
            <div className="text-base text-blue-700">Max</div>
          </div>
        </div>
        <div className="flex flex-row justify-end mb-3 h-7">
          <div className="h-full text-sm text-slate-400">
            Balance: {balance.avaBalance}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeCardForLiquidity;
