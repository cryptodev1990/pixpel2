import React from "react";

const StakingDetail = ({ locked }) => {
  return (
    <div className="bg-app-black px-5 py-8 w-full rounded-md">
      <div className="relative rounded-md bg-app-black-select w-full h-80 mb-8 flex justify-between">
        <div className="bg-app-blue rounded-md w-21 h-11 flex justify-center items-center">
          {locked ? (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />{" "}
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />{" "}
              <path d="M7 11V7a5 5 0 0 1 9.9-1" />
            </svg>
          )}
        </div>
        <div className="bg-app-blue rounded-md w-44 h-11 flex justify-center items-center">
          PIXPEL INSURANCE
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="bg-app-black-button rounded-lg px-8 py-5 flex justify-between">
          <div>USER</div>
          <div>100 K</div>
        </div>
        <div className="bg-app-black-button rounded-lg px-8 py-5 flex justify-between">
          <div>ARP</div>
          <div>30%</div>
        </div>
        <div className="bg-app-black-button rounded-lg px-8 py-5 flex justify-between">
          <div>COIN</div>
          <div>PIXP</div>
        </div>
        <div className="bg-app-black-button rounded-lg px-8 py-5 flex justify-between">
          <div>STAKING</div>
          <div>3 MUSD</div>
        </div>
      </div>
    </div>
  );
};

export default StakingDetail;
