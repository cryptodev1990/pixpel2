import React from "react";
import TransactionHistoryButton from "../../Button/TransactionHistoryButton";

const GamingAccountOverview = () => {
  return (
    <div className="flex justify-between w-full h-max py-8 px-5 bg-app-black rounded-lg items-baseline flex-col xs:flex-row gap-5">
      <div className="flex flex-col">
        <div className="md:text-3xl 2xs:mb-8 mb-3 text-2xl">Gaming account</div>
        <div className="text-sm text-gray-400 mb-4">Estimated balance</div>
        <div className="flex 2xs:flex-row flex-col gap-3 2xs:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
          <div className="text-base">300.000 PIXP</div>
          <div className="text-gray-400 text-sm">= 3,832,194,124.10 TUSD</div>
        </div>
      </div>
      <TransactionHistoryButton />
    </div>
  );
};

export default GamingAccountOverview;
