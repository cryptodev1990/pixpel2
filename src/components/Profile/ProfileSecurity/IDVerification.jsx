import React from "react";
import EnableButton from "../../Button/EnableButton";

const IDVerification = () => {
  return (
    <div className="flex gap-6 flex-col bg-app-black rounded-lg px-6 py-8">
      <div className="flex gap-6 items-center">
        <div className="bg-app-green w-3 h-3 rounded-full"></div>
        <div className="text-xl">ID Verification</div>
      </div>
      <div className="flex gap-6 items-baseline">
        <div className="bg-app-green w-3 h-3 rounded-full"></div>
        <div className="flex flex-col">
          <div className="text-xl">Passport</div>
          <div className="text-gray-500 text-sm">Verified: 03-07-2022</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-6 items-baseline">
          <div className="bg-app-red w-3 h-3 rounded-full"></div>
          <div className="flex flex-col">
            <div className="text-xl">ID country</div>
            <div className="text-gray-500 text-sm">Not Verified</div>
          </div>
        </div>
        <EnableButton title="Enable" />
      </div>
      <div className="flex gap-6 items-baseline">
        <div className="bg-app-green w-3 h-3 rounded-full"></div>
        <div className="flex flex-col">
          <div className="text-xl">Address</div>
          <div className="text-gray-500 text-sm">Verified: 03-07-2022</div>
        </div>
      </div>
    </div>
  );
};

export default IDVerification;
