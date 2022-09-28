import React from "react";
import { useState } from "react";
import ProfileButton from "../../components/Button/ProfileButton";
import ProfileSecurity from "../../components/Profile/ProfileSecurity";
import ProfileSettings from "../../components/Profile/ProfileSettings";
import DeveloperProfileOverview from "../../components/DeveloperProfile/DeveloperProfileOverview";
import Profile from "./Profile";
import { menuList } from "./datalist";

const DeveloperProfile = () => {
  const [profileButtonIndex, setProfileButtonIndex] = useState(0);
  const [showingComponent, setShowingComponent] = useState(
    <Profile />
  );
  let temp;
  const handleClick = (idx) => () => {
    setProfileButtonIndex(idx);
    switch (idx) {
      case 0:
        temp = <Profile />;
        break;
      case 1:
        temp = <ProfileSettings />;
        break;
      case 2:
        temp = <ProfileSecurity />;
        break;
      default:
        break;
    }
    setShowingComponent(temp);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col xl:px-14 md:px-6 px-2 w-full min-h-screen gap-8 pb-40">
        <div className="flex flex-col md:w-1/5 w-full bg-app-black rounded-xl h-max px-4 py-8 gap-2 xl:text-base">
          {menuList.map((menu, idx) => {
            return (
              <ProfileButton
                key={idx}
                title={menu.title}
                idx={idx}
                selected={profileButtonIndex === idx}
                handleClick={handleClick(idx)}
              />
            );
          })}
        </div>
        <div className="flex flex-col md:w-4/5 x-full">
          <DeveloperProfileOverview />
          {showingComponent}
        </div>
      </div>
    </>
  );
};
export default DeveloperProfile;
