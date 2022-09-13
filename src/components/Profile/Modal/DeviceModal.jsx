import React from "react";
import "./modal.css";
import { devicesList } from "../../../pages/Profile/datalist";

const DeviceModal = (props) => {
  return (
    <>
      {props.showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => props.setShowModal(false)}
            ></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div
                className="relative flex flex-col w-full max-w-2xl p-4 mx-auto 
															bg-app-black rounded-xl shadow-lg px-12 py-12 text-lg"
              >
                <div className="h-auto w-full py-6 px-8 bg-app-black flex flex-col rounded-lg">
                  <div className="text-white" style={{ fontSize: "28px" }}>
                    Devices
                  </div>
                  <div className="flex flex-col">
                    {devicesList.map((device, idx) => {
                      return (
                        <div
                          key={idx}
                          className="flex flex-row justify-between border-b-2 border-app-black my-2"
                        >
                          <div className="flex flex-col">
                            <div className="text-white">{device.title.OS}</div>
                            <div
                              className="text-gray-400"
                              style={{ fontSize: "12px" }}
                            >
                              {device.title.locate}
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-white">
                              {device.title.level}
                            </div>
                            <div
                              className="text-gray-400"
                              style={{ fontSize: "12px" }}
                            >
                              {device.title.time}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DeviceModal;
