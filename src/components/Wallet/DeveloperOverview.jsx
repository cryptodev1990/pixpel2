import React from "react";
import WalletOverview from "./Overview/WalletOverview";
import Account from "./Overview/Account";

const DeveloperOverview = () => {
  return (
    <div className="flex flex-col">
      <WalletOverview />
      <div className="mt-12 mb-4 text-3xl">Accounts</div>
      <div className="flex gap-1 justify-between">
        <div className="w-1/4">
          <Account title="Start Account" />
        </div>
        <div className="w-1/4">
          <Account title="Token Room" />
        </div>
        <div className="w-1/4">
          <Account title="Game Rewards" />
        </div>
        <div className="w-1/4">
          <Account title="Staking Portfoilo" />
        </div>
      </div>
    </div>
  );
};

export default DeveloperOverview;
