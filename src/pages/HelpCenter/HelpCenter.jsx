import React, { useState } from "react";
import HelpCenterButton from "../../components/Button/HelpCenterButton";
import MailImage from "../../asssets/images/Mail.svg";
import HelpAvatar from "../../components/Avatar/HelpAvatar";
import Mail from "../../components/Message/Mail";

const HelpCenter = () => {
  const [showMessageBox, setShowMessageBox] = useState(false);
  return (
    <>
      <div className="flex flex-col xl:px-32 lg:px-28 md:px-20 sm:px-12 px-4 pb-20">
        <div className="flex justify-between mb-10 sm:flex-row gap-6 flex-col">
          <div className="text-3xl">Help Center</div>
          <div className="flex gap-4 flex-col">
            <div className="text-sm">Security Service:</div>
            <input
              className="bg-app-black h-10 px-4 items-center rounded"
              placeholder="Search"
            ></input>
          </div>
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:flex-row gap-4">
          <HelpAvatar title="Reset Password" />
          <HelpAvatar title="Change Phone" />
          <HelpAvatar title="Change Email" />
          <HelpAvatar title="Reset authenticator" />
          <HelpAvatar title="Crypto deposit issues" />
        </div>
        <div className="my-10 text-3xl">FAQ</div>
        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <HelpCenterButton title="NEWBIE" />
          <HelpCenterButton title="TUTORIAL" />
          <HelpCenterButton title="SECURITY" />
          <HelpCenterButton title="INSURANCE" />
          <HelpCenterButton title="DEVELOPER" />
          <HelpCenterButton title="PLAYER" />
          <HelpCenterButton title="API" />
          <HelpCenterButton title="NFT" />
        </div>
        <div className="flex flex-col my-5">
          <Mail visibility={showMessageBox} />
          <div className="2xl:bottom-24 bottom-12 right-32 flex justify-end">
            <div
              className={
                "flex h-20 w-20 rounded-br-xl rounded-bl-xl bg-app-black justify-center items-center hover:bg-app-blue cursor-pointer" +
                (showMessageBox ? "" : " rounded-tr-xl rounded-tl-xl")
              }
              onClick={() => setShowMessageBox(!showMessageBox)}
            >
              <img src={MailImage} alt="avatar"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HelpCenter;
