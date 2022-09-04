import React from "react";
import { tokenList } from "../../pages/Profile/datalist";
import TokenButton from "../../components/Button/TokenButton";
import EstimateBalance from "./TokenState/EstimateBalance";
import ProfileCircle from "./ProfilePlayer/ProfileCircle";
import ProfileDevices from "./ProfilePlayer/ProfileDevices";
import ProfileActivity from "./ProfilePlayer/ProfileActivity";
import ProfileOpenOrders from "./ProfilePlayer/ProfileOpenOrders";
import ProfileSecurity from "./ProfilePlayer/ProfileSecurity";

const ProfilePlayerStat = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (idx) => () => {
    setSelectedIndex(idx);
  }

  return (
    <div>
      <div className="mt-12 font-semibold text-2xl">Balance Details</div>
      <div className="flex gap-4 mt-6 mb-3">
        {tokenList.map((menu, idx) => {
          return (
            <TokenButton
              key={idx}
              idx={idx}
              title={menu.title} 
              selected={selectedIndex === idx}
              handleClick={handleClick(idx)}
            />
          );
        })}
      </div>
      <div className="bg-app-black flex h-52 w-full rounded-lg justify-between px-6 items-center">
        <EstimateBalance id={selectedIndex} />
        <ProfileCircle />
      </div>
      <ProfileOpenOrders />
      <ProfileSecurity />
      <div className="flex flex-col lg:flex-row gap-12">
        <ProfileActivity />
        <ProfileDevices />
      </div>
    </div>
  );
};

export default ProfilePlayerStat;
