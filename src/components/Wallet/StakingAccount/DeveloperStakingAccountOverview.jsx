import React from "react";
import DeveloperTransactionHistory from "../../Button/DeveloperTransactionHistory";

const DeveloperStakingAccountOverview = () => {
  return (
    <div className="flex justify-between w-full h-max py-8 px-5 bg-app-black rounded-lg items-baseline xs:flex-row flex-col gap-5">
      <div className="flex flex-col">
        <div className="sm:text-3xl mb-8 text-xl">STAKING ACCOUNT</div>
        <div className="text-sm text-gray-400 mb-4">Estimated balance</div>
        <div className="flex gap-3 md:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md md:flex-row flex-col">
          <div className="text-base">300.000 PIXP</div>
          <div className="text-gray-400 text-sm">= 3,832,194,124.10 TUSD</div>
        </div>
      </div>
      <DeveloperTransactionHistory />
    </div>
  );
};

export default DeveloperStakingAccountOverview;
