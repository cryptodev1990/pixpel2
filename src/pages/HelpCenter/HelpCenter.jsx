import React from "react";
import { Header } from "../../components";
import HelpCenterButton from "../../components/Button/HelpCenterButton";
import Mail from "../../asssets/images/Mail.svg";
import Avartar from "../../asssets/images/market/nft-1.jpg";

const HelpCenter = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col px-32 pt-8 pb-16">
        <div className="flex justify-between h-8 mb-10">
          <div className="text-3xl">Help Center</div>
          <div className="flex gap-4 items-center">
            <div className="text-sm">Security Service:</div>
            <input
              className="bg-app-black-button h-10 px-4 items-center rounded"
              placeholder="Search"
            ></input>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/5 bg-app-black h-80 flex flex-col w-full px-5 pt-5 pb-10 items-center rounded-lg gap-3">
            <div className="bg-app-black-button w-full h-60 rounded-md">
              <img src={Avartar} alt="Avatar" className="h-60" />
            </div>
            <div>Reset Password</div>
          </div>
          <div className="lg:w-1/5 bg-app-black h-80 flex flex-col w-full px-5 pt-5 pb-10 items-center rounded-lg gap-3">
            <div className="bg-app-black-button w-full h-60 rounded-md">
              <img src={Avartar} alt="Avatar" className="h-60" />
            </div>
            <div>Change Phone</div>
          </div>
          <div className="lg:w-1/5 bg-app-black h-80 flex flex-col w-full px-5 pt-5 pb-10 items-center rounded-lg gap-3">
            <div className="bg-app-black-button w-full h-60 rounded-md">
              <img src={Avartar} alt="Avatar" className="h-60" />
            </div>
            <div>Change Email</div>
          </div>
          <div className="lg:w-1/5 bg-app-black h-80 flex flex-col w-full px-5 pt-5 pb-10 items-center rounded-lg gap-3">
            <div className="bg-app-black-button w-full h-60 rounded-md">
              <img src={Avartar} alt="Avatar" className="h-60" />
            </div>
            <div>Reset authenticator</div>
          </div>
          <div className="lg:w-1/5 bg-app-black h-80 flex flex-col w-full px-5 pt-5 pb-10 items-center rounded-lg gap-3">
            <div className="bg-app-black-button w-full h-60 rounded-md">
              <img src={Avartar} alt="Avatar" className="h-60" />
            </div>
            <div>Crypto deposit issues</div>
          </div>
        </div>
        <div className="my-10 text-3xl">FAQ</div>
        <div className="grid lg:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <HelpCenterButton title="NEWBIE" />
          <HelpCenterButton title="TUTORIAL" />
          <HelpCenterButton title="SECURITY" />
          <HelpCenterButton title="INSURANCE" />
          <HelpCenterButton title="DEVELOPER" />
          <HelpCenterButton title="PLAYER" />
          <HelpCenterButton title="API" />
          <HelpCenterButton title="NFT" />
        </div>
        <div className="flex justify-end mb-40">
          <div className="flex h-20 w-20 rounded bg-app-black justify-center items-center hover:bg-app-blue">
            <img src={Mail} alt="avatar"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default HelpCenter;
