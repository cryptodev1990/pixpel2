import React from "react";

const ProfileCircle = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-40 h-40 rounded-full border-8 border-app-black flex-none"></div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center">
          <div className="bg-app-red w-3 h-3 rounded-sm mr-2 flex-none"></div>
          <p className="font-light text-sm">BTC</p>
          <div className="ml-5">123,864,852.110005000</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="bg-app-blue-second w-3 h-3 rounded-sm mr-2 flex-none"></div>
          <div className="font-light text-sm">BTC</div>
          <div className="ml-5">123,864,852.110005000</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="bg-app-purple w-3 h-3 rounded-sm mr-2 flex-none"></div>
          <div className="font-light text-sm">BTC</div>
          <div className="ml-5">123,864,852.110005000</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="bg-app-green w-3 h-3 rounded-sm mr-2 flex-none"></div>
          <div className="font-light text-sm">BTC</div>
          <div className="ml-5">123,864,852.110005000</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="bg-app-blue-fifth w-3 h-3 rounded-sm mr-2 flex-none"></div>
          <div className="font-light text-sm">BTC</div>
          <div className="ml-5">123,864,852.110005000</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCircle;
