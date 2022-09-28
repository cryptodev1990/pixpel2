import React from "react";
import Calculation from "../../components/StakingPortfolio/Calculation";
import ColorStatus from "../../components/StakingPortfolio/ColorStatus";
import LockingDetail from "../../components/StakingPortfolio/LockingDetail";

const Overview = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-app-black flex flex-col gap-3 lg:flex-row xl:px-8 md:px-6 sm:px-4 px-2 xl:py-12 md:py-8 sm:py-5 py-2 xl:w-3/4 w-full rounded-md mb-12">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:w-2/3 w-full gap-5">
          <Calculation title="Game Token:" cost="2 000 000 PIXP" />
          <Calculation title="STAKES QTY:" cost="5" />
          <Calculation title="Amount TUSD" cost="400 000 PIXP" />
          <Calculation title="TOTAL INVESTOERS:" cost="200" />
          <Calculation title="APR BUSD:" cost="48 000 PIXP" />
          <Calculation title="APR%:" cost="12%" />
        </div>
        <div className="flex flex-col gap-7 justify-center items-center lg:w-1/3 w-full">
          <div className=" h-44 w-44 rounded-full border-app-black border-8" />
          <div className="flex md:gap-4 sm:gap-3 gap-2">
            <ColorStatus color="bg-app-red" title="NEM" />
            <ColorStatus color="bg-app-blue" title="VAN" />
            <ColorStatus color="bg-app-purple" title="ALP" />
            <ColorStatus color="bg-app-blue-fifth" title="GAM" />
          </div>
        </div>
      </div>
      <div className="xl:w-3/4 w-full">
        <div className="flex text-3xl font-semibold mb-8">STAKES</div>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-8">
          <LockingDetail locked={true} title="NEMESIS" day="120 DAYS" />
          <LockingDetail locked={false} title="VANGUARD" day="80 DAYS" />
          <LockingDetail locked={false} title="ALPHA" day="60 DAYS" />
          <LockingDetail locked={false} title="GAMMA" day="60 DAYS" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
