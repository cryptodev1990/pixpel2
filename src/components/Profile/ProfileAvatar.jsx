import React from "react";
import Avatar from "../../asssets/images/1.JPG";
import ExitButton from "../Button/ExitButton";

const ProfileAvatar = () => {
  return (
    <div className="flex bg-app-black rounded-lg h-auto w-full xl:px-10 px-4 items-center justify-between py-6">
      <div className="flex gap-4 items-center">
        <img
          src={Avatar}
          className="flex xl:h-24 h-16 rounded-full"
          alt="avatar"
        />
        <div className="flex flex-col">
          <div className="font-medium md:text-xl sm:text-base xs:text-sm">
            Juan Vivas
          </div>
          <div className="font-normal md:text-base sm:text-sm xs:text-xs text-gray-400">
            Last log-in 2022-04-18 14:12
          </div>
        </div>
      </div>

      <ExitButton />
    </div>
  );
};

export default ProfileAvatar;
