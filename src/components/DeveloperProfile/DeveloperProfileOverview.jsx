import React from "react";
import profileImage from "../../asssets/images/1.JPG";
import OK from "../../asssets/images/OK-gray.svg";
import ExitButton from "../Button/ExitButton";

const DeveloperProfileOverview = () => {
  return (
    <div className="flex bg-app-black rounded-lg px-8 py-5 w-full">
      <img
        src={profileImage}
        alt="Profile"
        className="w-28 h-28 rounded-full mr-6"
      />
      <div className="flex mt-10 w-full gap-20">
        <div className="flex flex-col gap-3 w-4/5">
          <div className="flex gap-2 text-lg">
            Verified Regular
            <img src={OK} alt="alt" />
          </div>
          <div className="flex gap-12 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              Name:
              <div className="bg-app-black-button rounded-lg h-16"></div>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              Phone Number:
              <div className="bg-app-black-button rounded-lg h-16"></div>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2 w-1/2">
              Email:
              <div className="bg-app-black-button rounded-lg h-16"></div>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              Address:
              <div className="bg-app-black-button rounded-lg h-16"></div>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            Last log-in 2022-04-18 14:12
          </div>
        </div>
        <ExitButton />
      </div>
    </div>
  );
};

export default DeveloperProfileOverview;
