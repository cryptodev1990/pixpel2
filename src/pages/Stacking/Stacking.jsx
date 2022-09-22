import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { stakingList } from "./dataList";

const Stacking = () => {
  const navigate = useNavigate();
  const [locked, setLocked] = useState(false);

  return (
    <div className="flex flex-col gap-3 px-16 pb-8">
      <div className="flex items-end mb-10">
        <div
          className="flex bg-app-black-button px-2 py-2 justify-center rounded-md cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg
            className="h-8 w-8 text-gray-500"
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
        <div className="flex justify-center text-5xl font-semibold w-full">
          Staking
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-4xl font-semibold">
          {locked ? "Locked" : "UnLocked"}
        </div>
        <div className="flex gap-3">
          <div
            className={
              (locked ? "bg-app-blue" : "bg-app-black") +
              " px-8 py-4 rounded-md cursor-pointer hover:bg-app-blue"
            }
            onClick={() => setLocked(true)}
          >
            <svg
              className="h-8 w-8"
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
              " px-8 py-4 rounded-md cursor-pointer hover:bg-app-blue"
            }
            onClick={() => setLocked(false)}
          >
            <svg
              className="h-8 w-8"
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
      <div className="overflow-x-auto relative mt-10">
        <table className="table-auto">
          <thead>
            <tr>
              <td className="text-gray-500 w-1/5">Token</td>
              <td className="text-gray-500 w-1/5 px-6">Game</td>
              <td className="text-gray-500 w-1/5 px-6">Invest</td>
              <td className="text-gray-500 w-1/5 px-6">Duration</td>
              <td className="text-gray-500 w-1/5 px-6">Minimum</td>
              <td className="text-gray-500" />
            </tr>
          </thead>
          <tbody className="px-4">
            {stakingList.map((staking, idx) => {
              return (
                <tr key={idx}>
                  <td className="py-3">
                    <div className="flex gap-2 items-center">
                      <img src={staking.img} alt="token" />
                      <div className="text-lg">{staking.name}</div>
                    </div>
                  </td>
                  <td className="px-6">
                    <div className="flex text-lg items-center">{staking.game}</div>
                  </td>
                  <td className="px-6">
                    <div className="flex text-app-green items-center">{staking.invest}%</div>
                  </td>
                  <td className="px-6">
                    <div className="flex items-center bg-app-black-duration px-6 py-1 rounded-md w-max">{staking.duration}</div>
                  </td>
                  <td className="px-6">
                    <div className="flex items-center text-lg">{staking.minimum}</div>
                  </td>
                  <td className="px-6">
                    <div className="flex items-center text-xl bg-app-green px-6 py-1 rounded-md">STAKE</div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stacking;
