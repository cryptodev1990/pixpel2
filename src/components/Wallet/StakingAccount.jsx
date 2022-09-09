import React from "react";
import StakingAccountOverview from "./StakingAccount/StakingAccountOverview";
import LockedUnlocked from "./StakingAccount/LockedUnlocked";

const StakingAccount = () => {
  return (
    <div>
      <StakingAccountOverview />
      <LockedUnlocked />
    </div>
  )
}

export default StakingAccount;