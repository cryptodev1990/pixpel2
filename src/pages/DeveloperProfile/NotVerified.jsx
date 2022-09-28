import React from "react";
import DropDownButton from "../../components/DropDown/DropDownButton";

const yesno = [
  {
    id: 1,
    title: "Yes",
  },
  {
    id: 2,
    title: "No",
  },
];

const NotVerified = () => {
  return (
    <div className="flex flex-col px-56 pb-56">
      <div className="flex gap-10 bg-app-black px-32 py-14 mb-20">
        <div className="flex flex-col gap-1 items-center">
          <div className="border-app-black border-8 w-44 h-44 flex-none rounded-full flex justify-center items-center text-2xl font-medium">
            LOGO
          </div>
          <div className="text-gray-500 text-xl">Not Verified</div>
        </div>

        <div className="flex gap-24 justify-between w-full">
          <div className="flex flex-col gap-3 w-1/2">
            <div className="flex flex-col gap-1">
              Name:
              <div className="bg-app-black-button h-16 rounded-lg"></div>
            </div>
            <div className="flex flex-col gap-1">
              Email:
              <div className="bg-app-black-button h-16 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-1/2">
            <div className="flex flex-col gap-1">
              Phone Number:
              <div className="bg-app-black-button h-16 rounded-lg"></div>
            </div>
            <div className="flex flex-col gap-1">
              Address:
              <div className="bg-app-black-button h-16 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-3xl font-medium mb-8">Verification Form</div>
      <div className="flex justify-between gap-16 w-full">
        <div className="flex flex-col gap-8 w-1/2">
          <div className="py-7 px-12 bg-app-black rounded-lg text-lg">
            Date of Launch:
          </div>
          <div className="py-7 px-12 bg-app-black rounded-lg text-lg">
            Country:
          </div>
          <div className="py-7 px-12 bg-app-black rounded-lg text-lg">
            Share Holders:
          </div>
          <div className="py-7 px-12 bg-app-black rounded-lg text-lg">
            Share Holders:
          </div>
        </div>
        <div className="flex flex-col gap-8 w-1/2">
          <div className=" h-21 items-center pl-12 bg-app-black rounded-lg text-lg justify-between flex gap-5">
            Will be Launched in PixPel:
            <div className="w-1/6">
              <DropDownButton initialContent="" contentList={yesno} backgroundColor="bg-app-black" />
            </div>
          </div>
          <div className="py-7 px-12 bg-app-black rounded-lg text-lg">
            Legal Name:
          </div>
          <div className="py-7 px-12 bg-app-black rounded-lg text-lg">
            Per Percentage:
          </div>
          <div className="py-7 px-12 bg-app-black rounded-lg text-lg">
            Percentage:
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotVerified;
