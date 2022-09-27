import React from "react";
import ProfileCircle from "../../Profile/ProfilePlayer/ProfileCircle";

const WalletOverview = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-between w-full h-max py-8 px-10 bg-app-black rounded-lg">
      <div className="flex flex-col">
        <div className="text-3xl mb-8">WALLET OVERVIEW</div>
        <div className="text-sm text-gray-400 mb-4">Value Purchase</div>
        <div className="flex xs:gap-3 gap-1 xs:items-center px-4 w-full bg-app-black-button py-3 rounded-md xs:flex-row flex-col">
          <div className="text-base">300.000 PIXP</div>
          <div className="text-gray-400 text-sm">= 3,832,194,124.10 TUSD</div>
        </div>
      </div>
      <ProfileCircle />
    </div>
  );
};

export default WalletOverview;
