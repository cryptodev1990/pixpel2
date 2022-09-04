import React from "react";
import AccountActivity from "./ProfileSecurity/AccountActivity";
import IDVerification from "./ProfileSecurity/IDVerification";
import TwoMethodSecurity from "./ProfileSecurity/TwoMethodSecurity";

const ProfileSecurity = () => {
  return (
    <div>
      <div className="mt-20 mb-8 font-semibold text-3xl">Security</div>
      <div className="lg:flex-row flex flex-col gap-4 h-80 w-full">
        <TwoMethodSecurity />
        <IDVerification />
        <AccountActivity />
      </div>
    </div>
  );
};

export default ProfileSecurity;
