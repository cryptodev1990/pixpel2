import React from "react";
import Avatar from "../../asssets/images/1.JPG";
import ExitButton from "../Button/ExitButton";

const ProfileAvatar = () => {
  return (
    <div className="flex bg-app-black rounded-lg h-40 w-full px-10 items-center justify-between">
      <div>
        <img
          src={Avatar}
          className="flex xl:h-28 md:h-24 sm:h-16 xs:h-12 rounded-full"
          alt="avatar"
        />
      </div>
      <div className="flex flex-col">
        <div className="font-medium md:text-xl sm:text-base xs:text-sm">
          Juan Vivas
        </div>
        <div className="font-normal md:text-base sm:text-sm xs:text-xs text-gray-400">
          Last log-in 2022-04-18 14:12
        </div>
      </div>
      <ExitButton />
    </div>
  );
};

export default ProfileAvatar;
