import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { stakingList } from "./dataList";

const Stacking = () => {
  const navigate = useNavigate();
  const [locked, setLocked] = useState(false);

  return (
    <div className="flex flex-col gap-3 2xl:px-16 xl:px-12 lg:px-9 md:px-6 sm:px-4 px-3 2xl:pb-8 xl:pb-7 lg:pb-6 md:pb-5 sm:pb-4 pb-3">
      <div className="flex items-end 2xl:mb-10 xl:mb-8 lg:mb-6 md:mb-4 sm:mb-3 mb-2">
        <div
          className="flex bg-app-black-button md:px-2 md:py-2 px-1 py-1 justify-center rounded-md cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg
            className="2xl:h-8 xl:h-7 lg:h-6 md:h-5 sm:h-4 h-3 2xl:w-8 xl:w-7 lg:w-6 md:w-5 sm:w-4 w-3"
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
            <line x1="5" y1="12" x2="19" y2="12" />{" "}
            <line x1="5" y1="12" x2="9" y2="16" />{" "}
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
        </div>
        <div className="flex justify-center 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold w-full">
          Staking
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="2xl:text-3xl lg:text-2xl md:text-xl text-lg  font-bold">
          {locked ? "Locked" : "UnLocked"}
        </div>
        <div className="flex gap-3">
          <div
            className={
              (locked ? "bg-app-blue" : "bg-app-black") +
              " 2xl:px-8 xl:px-7 lg:px-6 md:px-5 sm:px-4 px-3 2xl:py-4 lg:py-3 sm:py-2 py-1 rounded-md cursor-pointer hover:bg-app-blue"
            }
            onClick={() => setLocked(true)}
          >
            <svg
              className="2xl:h-8 xl:h-7 lg:h-6 md:h-5 sm:h-4 h-3 2xl:w-8 xl:w-7 lg:w-6 md:w-5 sm:w-4 w-3"
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
          </div>
          <div
            className={
              (locked ? "bg-app-black" : "bg-app-blue") +
              " 2xl:px-8 xl:px-7 lg:px-6 md:px-5 sm:px-4 px-3 2xl:py-4 lg:py-3 sm:py-2 py-1 rounded-md cursor-pointer hover:bg-app-blue"
            }
            onClick={() => setLocked(false)}
          >
            <svg
              className="2xl:h-8 xl:h-7 lg:h-6 md:h-5 sm:h-4 h-3 2xl:w-8 xl:w-7 lg:w-6 md:w-5 sm:w-4 w-3"
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
          </div>
        </div>
      </div>
      <div className="overflow-x-auto relative 2xl:mt-10 xl:mt-8 lg:mt-6 md:mt-4 sm:mt-3 mt-2">
        <table className="table-auto">
          <thead>
            <tr>
              <td className="text-gray-500 text-sm md:text-base w-1/5">
                Token
              </td>
              <td className="text-gray-500 text-sm md:text-base w-1/5 px-8">
                Game
              </td>
              <td className="text-gray-500 text-sm md:text-base w-1/5 px-6">
                Invest
              </td>
              <td className="text-gray-500 text-sm md:text-base w-1/5 px-6">
                Duration
              </td>
              <td className="text-gray-500 text-sm md:text-base w-1/5 px-6">
                Minimum
              </td>
              <td />
            </tr>
          </thead>
          <tbody className="px-4">
            {stakingList.map((staking, idx) => {
              return (
                <tr key={idx}>
                  <td className="py-3">
                    <div className="flex gap-2 items-center">
                      <img
                        src={staking.img}
                        alt="token"
                        className="xl:h-10 md:h-7 h-4"
                      />
                      <div className="md:text-lg text-base">{staking.name}</div>
                    </div>
                  </td>
                  <td className="px-8">
                    <div className="flex w-max md:text-lg text-base items-center">
                      {staking.game}
                    </div>
                  </td>
                  <td className="px-6">
                    <div className="flex text-app-green items-center">
                      {staking.invest}%
                    </div>
                  </td>
                  <td className="px-6">
                    <div className="flex items-center bg-app-black-duration md:text-base text-sm md:px-6 px-4 py-1 rounded-md w-max">
                      {staking.duration}
                    </div>
                  </td>
                  <td className="px-6">
                    <div className="flex items-center md:text-lg text-base">
                      {staking.minimum}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center md:text-xl text-lg bg-app-green md:px-6 px-4 py-1 rounded-md">
                      STAKE
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stacking;
