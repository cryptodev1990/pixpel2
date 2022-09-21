import React from "react";

import bnb from "../../asssets/images/UserHome/bnb.png";
import eth from "../../asssets/images/UserHome/eth.png";
import btc from "../../asssets/images/UserHome/btc.png";
import luna from "../../asssets/images/UserHome/luna.png";

const stakingList = [
  {
    id: 1,
    img: bnb,
    token: "BNB",
    invest: 7.8,
    duration: ["90"],
    minimun: "2 BNB",
  },
  {
    id: 2,
    img: eth,
    token: "ETH",
    invest: 2.2,
    duration: ["30", "90", "120"],
    minimun: "200 ETH",
  },
  {
    id: 3,
    img: btc,
    token: "BTC",
    invest: 1.03,
    duration: ["120", "LOCKED"],
    minimun: "0.02 BNB",
  },
  {
    id: 4,
    img: luna,
    token: "LUNA",
    invest: 54.2,
    duration: ["90", "120"],
    minimun: "835,213 LUNA",
  },
];

const Staking = () => {
  return (
    <div className="flex flex-col gap-10 px-32 py-32">
      <div className="text-5xl font-semibold">Staking</div>
      <div className="overflow-x-auto relative">
        <table className="table-auto">
          <thead>
            <tr>
              <td className="text-gray-400 w-1/4">Token</td>
              <td className="text-gray-400 w-1/5 px-6">Invest</td>
              <td className="text-gray-400 w-1/4 px-6">Duration</td>
              <td className="text-gray-400 w-1/4 px-6">Minimun</td>
              <td className="text-gray-400 px-6"></td>
            </tr>
          </thead>
          <tbody className="px-4">
            {stakingList.map((staking, idx) => {
              return (
                <tr key={idx}>
                  <td className="py-3">
                    <div className="flex gap-2 items-center">
                      <img src={staking.img} alt="token" />
                      <div className="text-lg">{staking.token}</div>
                    </div>
                  </td>
                  <td className="px-6">
                    <div className="text-app-green flex items-center">{staking.invest}%</div>
                  </td>
                  <td className="px-6">
                    <div className="flex items-center gap-3">
                      {staking.duration.map((day, idx) => {
                        return (
                          <div
                            key={idx}
                            className="bg-app-black-duration py-2 px-7 text-lg rounded-md"
                          >
                            {day}
                          </div>
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-6">
                    <div className="text-lg">{staking.minimun}</div>
                  </td>
                  <td className="px-6">
                    <div className="bg-app-green cursor-pointer px-7 py-2 text-lg rounded-md">
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

export default Staking;
