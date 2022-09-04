import React from "react";
import { verificationList } from "../../../pages/Profile/datalist";
import EnableButton from "../../Button/EnableButton";

const TwoMethodSecurity = () => {
  return (
    <div className="flex flex-col bg-app-black rounded-lg w-full lg:w-1/3 px-6 py-8">
      <div className="flex gap-6 items-center">
        <div className="bg-app-green rounded-full w-3 h-3"></div>
        <div className="text-xl">Two method security log-in</div>
      </div>
      <div className="text-lg pt-8">Phone number</div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center w-auto px-8 bg-app-black-button h-10 rounded">
          {verificationList.phone}
        </div>
        <EnableButton title="Enable" />
      </div>
      <div className="text-lg mt-10">Gmail verification</div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center w-auto px-8 bg-app-black-button h-10 rounded">
          {verificationList.gmail}
        </div>
        <EnableButton title="Enable" />
      </div>
    </div>
  );
};

export default TwoMethodSecurity;
