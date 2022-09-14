import React, { useState } from "react";
import ActivityModal from "../Modal/ActivityModal";
import DeviceModal from "../Modal/DeviceModal";

const AccountActivity = () => {
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showDeviceModal, setShowDeviceModal] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-app-black rounded-lg px-6 py-8 gap-6 overflow-x-auto">
        <div className="flex items-center gap-6">
          <div className="rounded-full w-3 h-3 bg-app-green"></div>
          <div className="text-xl">Devices and activities</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-6 items-baseline">
            <div className="bg-app-green w-3 h-3 rounded-full"></div>
            <div className="flex flex-col">
              <div className="text-xl">Safe devices</div>
              <div className="text-gray-500 text-sm">Verified: 03-07-2022</div>
            </div>
          </div>
          <div
            className="bg-app-blue rounded-md px-4 py-2 cursor-pointer flex justify-center items-center"
            onClick={() => {
              setShowDeviceModal(true);
            }}
          >
            Manage
          </div>
        </div>
        <div className="flex justify-between my-8">
          <div className="text-lg">Account activity</div>
          <div
            className="bg-app-blue rounded-md px-4 py-2 cursor-pointer flex justify-center items-center"
            onClick={() => {
              setShowActivityModal(true);
            }}
          >
            View
          </div>
        </div>
      </div>
      {
        <ActivityModal
          showModal={showActivityModal}
          setShowModal={setShowActivityModal}
        />
      }
      {
        <DeviceModal
          showModal={showDeviceModal}
          setShowModal={setShowDeviceModal}
        />
      }
    </>
  );
};

export default AccountActivity;
