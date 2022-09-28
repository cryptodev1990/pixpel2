import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col -ml-96 mt-14">
      <div className="flex justify-center text-2xl mb-10">Verification</div>
      <div className="flex justify-between gap-5">
        <div className="flex flex-col bg-app-black rounded-lg px-5 py-8 w-1/3 h-max">
          <div className="flex justify-center mb-14">
            <div className="px-5 py-2 w-max bg-app-black-duration rounded-lg font-bold text-xl underline">
              REGULAR
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-24">
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              NFT Market Place
            </div>
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              100% Insurance
            </div>
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              Business Wallet
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-app-black rounded-lg px-5 py-8 w-1/3 h-max">
          <div className="flex justify-center mb-14">
            <div className="px-5 py-2 w-max bg-app-blue rounded-lg font-bold text-xl underline">
              MEDIUM
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-14">
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              Game Market Place
            </div>
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              NFT Market Place
            </div>
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              Insurance
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="px-5 py-2 w-max bg-app-blue rounded-lg font-medium text-lg">
              APPLY
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-app-black rounded-lg px-5 py-8 w-1/3 h-max">
          <div className="flex justify-center mb-14">
            <div className="px-8 py-2 w-max bg-app-green rounded-lg font-bold text-xl underline">
              SAFE
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-14">
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              Game Market Place
            </div>
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              NFT Market Place
            </div>
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              Insurance
            </div>
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              Staking
            </div>
            <div className="bg-app-black-button py-5 w-full rounded-lg flex justify-center">
              Token Room
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="px-5 py-2 w-max bg-app-green rounded-lg font-medium">
              APPLY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
