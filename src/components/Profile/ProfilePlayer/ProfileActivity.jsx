import React from "react";
import { activityList } from "../../../pages/Profile/datalist";

const ProfileActivity = () => {
  return (
    <div className="h-auto lg:w-1/2 w-full py-6 px-8 bg-app-black flex flex-col rounded-lg">
      <div className="text-white" style={{ fontSize: "28px" }}>
        Activity
      </div>
      <div className="flex flex-col">
        {activityList.map((activity, idx) => {
          return (
            <div key={idx} className="flex flex-row justify-between border-b-2 border-app-black my-2">
              <div className="flex flex-col">
                <div className="text-white">{activity.title.skill}</div>
                <div className="text-gray-400" style={{ fontSize: "12px" }}>
                  {activity.title.locate}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-white">{activity.title.level}</div>
                <div className="text-gray-400" style={{ fontSize: "12px" }}>
                  {activity.title.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileActivity;
