import React from "react";
import { devicesList } from "../../../pages/Profile/datalist";

const ProfileDevices = () => {
  return (
    <div className="h-auto lg:w-1/2 w-full py-6 px-8 bg-app-black flex flex-col rounded-lg">
      <div className="text-white" style={{ fontSize: "28px" }}>
        Devices
      </div>
      <div className="flex flex-col">
        {devicesList.map((device, idx) => {
          return (
            <div key={idx} className="flex flex-row justify-between border-b-2 border-app-black my-2">
              <div className="flex flex-col">
                <div className="text-white">{device.title.OS}</div>
                <div className="text-gray-400" style={{ fontSize: "12px" }}>
                  {device.title.locate}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-white">{device.title.level}</div>
                <div className="text-gray-400" style={{ fontSize: "12px" }}>
                  {device.title.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileDevices;
