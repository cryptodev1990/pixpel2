import React from "react";
import EnableButton from "../../Button/EnableButton";

const AccountActivity = () => {
  return (
    <div className="flex flex-col bg-app-black rounded-lg px-6 py-8 gap-6">
      <div className="flex items-center gap-6">
        <div className="rounded-full w-3 h-3 bg-app-green"></div>
        <div className="text-xl">Devices and activities</div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-6 items-baseline">
          <div className="bg-app-green w-3 h-3 rounded-full"></div>
          <div className="flex flex-col">
            <div className="text-xl">Safe devices</div>
            <div className="text-gray-500 text-sm">Verified: 03-07-2022</div>
          </div>
        </div>
        <EnableButton title="Manage" />
      </div>
      <div className="flex justify-between my-8">
        <div className="text-lg">Account activity</div>
        <EnableButton title="View" />
      </div>
    </div>
  );
};

export default AccountActivity;
