import React from "react";
import DeveloperStakingAccountOverview from "./StakingAccount/DeveloperStakingAccountOverview";
import LockedUnlocked from "./StakingAccount/LockedUnlocked";

const DeveloperStakingAccount = () => {
  return (
    <div>
      <DeveloperStakingAccountOverview />
      <LockedUnlocked />
    </div>
  )
}

export default DeveloperStakingAccount;