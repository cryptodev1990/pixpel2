import React from "react";
import AccountActivity from "./ProfileSecurity/AccountActivity";
import IDVerification from "./ProfileSecurity/IDVerification";
import TwoMethodSecurity from "./ProfileSecurity/TwoMethodSecurity";

const ProfileSecurity = () => {
  return (
    <div>
      <div className="mt-20 mb-8 font-semibold text-3xl">Security</div>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
        <TwoMethodSecurity />
        <IDVerification />
        <AccountActivity />
      </div>
    </div>
  );
};

export default ProfileSecurity;
