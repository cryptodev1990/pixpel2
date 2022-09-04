import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import ProfileButton from "../../components/Button/ProfileButton";
import ProfileAvatar from "../../components/Profile/ProfileAvatar";
import ProfilePlayerStat from "../../components/Profile/ProfilePlayerStat";
import ProfileSecurity from "../../components/Profile/ProfileSecurity";
import ProfileSettings from "../../components/Profile/ProfileSettings";
import { menuList } from "./datalist";

const Profile = () => {
  const [profileButtonIndex, setProfileButtonIndex] = useState(0);
  const [showingComponent, setShowingComponent] = useState(<ProfilePlayerStat/>);
  let temp; 
  const handleClick = (idx) => () => {
    setProfileButtonIndex(idx);
    switch(idx) {
      case 0:
       temp = <ProfilePlayerStat />
       break;
      case 1:
        temp = <ProfileSettings />
        break;
      case 3:
        temp = <ProfileSecurity />
        break;
      default:
        break;
    }
    setShowingComponent(temp);
  };

  return (
    <>
      <Header />
      <div className="flex flex-row px-14 w-full min-h-screen gap-8 pb-80">
        <div className="flex flex-col w-1/5 bg-app-black rounded-xl h-80 px-4 py-4 gap-2">
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
        <div className="flex flex-col w-4/5">
          <ProfileAvatar />
          {showingComponent}
        </div>
      </div>
    </>
  );
};
export default Profile;