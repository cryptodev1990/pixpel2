import React from "react";
import Avatar from "../../asssets/images/1.JPG";
import ExitButton from "../Button/ExitButton";

const ProfileAvatar = () => {
  return (
    <div className="flex bg-app-black rounded-lg h-40 w-full px-10 items-center justify-between">
      <div className="flex gap-6 items-center">
        <div>
          <img
            src={Avatar}
            className="flex h-28 w-28 rounded-full"
            alt="avatar"
          ></img>
        </div>
        <div className="flex flex-col">
          <div className="font-medium text-xl">Juan Vivas</div>
          <div className="font-normal text-base text-gray-400">
            Last log-in 2022-04-18 14:12
          </div>
        </div>
      </div>
      <ExitButton />
    </div>
  );
};

export default ProfileAvatar;
