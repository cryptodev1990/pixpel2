import React from "react";
import { activityList } from "../../../pages/Profile/datalist";

const ActivityModal = (props) => {
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
															bg-app-black rounded-xl shadow-lg xs:px-12 xs:py-12 px-0 py-0 text-lg"
              >
                <div className="h-auto w-full py-6 px-8 bg-app-black flex flex-col rounded-lg">
                  <div className=" text-3xl">Activity</div>
                  <div className="flex flex-col">
                    {activityList.map((activity, idx) => {
                      return (
                        <div
                          key={idx}
                          className="flex flex-row justify-between border-b-2 border-app-black my-2"
                        >
                          <div className="flex flex-col">
                            <div>{activity.title.skill}</div>
                            <div
                              className="text-gray-400"
                              style={{ fontSize: "12px" }}
                            >
                              {activity.title.locate}
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div>{activity.title.level}</div>
                            <div
                              className="text-gray-400"
                              style={{ fontSize: "12px" }}
                            >
                              {activity.title.time}
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

export default ActivityModal;
