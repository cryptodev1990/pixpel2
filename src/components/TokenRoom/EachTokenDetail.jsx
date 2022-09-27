import React from "react";
import Calculation from "../StakingPortfolio/Calculation";
import { useNavigate } from "react-router-dom";

const EachTokenDetail = ({ type }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-app-black px-12 py-7 flex justify-between gap-7">
      <div className="bg-app-black-button flex flex-col gap-2 justify-center items-center rounded-lg w-1/6">
        <div className="text-3xl font-semibold">{type}</div>
        <div className="text-app-blue text-xl">1.000.000</div>
      </div>
      <div className="flex gap-7 w-1/2">
        <div className="flex flex-col my-5 gap-2 w-1/2">
          <Calculation title="Minted:" cost="2 000 000 PIXP" />
          <Calculation title="Holders:" cost="200 PIXP" />
          <Calculation title="Staking Holders:" cost="50 PIXP" />
        </div>
        <div className="flex flex-col my-5 gap-2 w-1/2">
          <Calculation title="Burned:" cost="200 PIXP" />
          <Calculation title="Stakes:" cost="2" />
          <Calculation title="Remaining TTM" cost="600.000 PIXP" />
        </div>
      </div>
      <div className="w-1/4 flex flex-col items-center gap-8">
        <div className="bg-app-black-button px-7 py-5 flex items-center gap-4 w-full rounded-lg">
          UNLOCK DATE:
          <div className="text-app-blue">01/02/2022</div>
        </div>
        <div className="bg-app-blue px-16 py-5 rounded-md cursor-pointer">
          Launch
        </div>
        <div className="flex gap-8">
          <div
            className="bg-app-blue px-16 py-5 rounded-md cursor-pointer"
            onClick={() => navigate("/tokenroom/mint")}
          >
            MINT
          </div>
          <div
            className="bg-app-blue px-16 py-5 rounded-md cursor-pointer"
            onClick={() => navigate("/tokenroom/burn")}
          >
            BURN
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachTokenDetail;
