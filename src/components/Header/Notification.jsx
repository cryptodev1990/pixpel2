import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import notification from "../../asssets/images/notification.svg";

const Notification = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() => setShowDropDown(!showDropDown)}
    >
      <div className="flex pr-5 gap-1 items-center justify-between">
        <img src={notification} alt="notification" />
      </div>
      <div className="relative">
        {showDropDown ? (
          <div className="absolute -left-80 inset-7 z-10">
            <div
              className="fixed inset-0 w-full h-full"
              onClick={() => setShowDropDown(!showDropDown)}
            />
            <div className="flex flex-col rounded-b-md bg-app-black py-3 px-4">
              <div className="relative flex bg-app-black-button rounded justify-between items-center px-5 py-3">
                <div className="flex gap-2">
                  <div>108</div>
                  <div className="text-gray-500 text-sm w-max">
                    pending notifications
                  </div>
                </div>
                <div
                  className="text-app-blue text-sm"
                  onClick={() => navigate("/notification")}
                >
                  View all
                </div>
              </div>
              <div className="relative flex items-start gap-2 px-3 py-4 border-b-2 border-app-black">
                <div onClick={() => navigate("/notification")}>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-max text-sm">Withdraw Successful</div>
                  <div className="text-gray-500 text-xs">
                    You have successfully withdraw 0.24495996 BNB at 2022-04-23
                    15:12:43(UTC). If this activity is now your own, please
                    contact us immediately
                  </div>
                </div>
              </div>
              <div className="relative flex items-start gap-2 px-3 py-4 border-b-2 border-app-black">
                <div onClick={() => navigate("/notification")}>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-max text-sm">Withdraw Successful</div>
                  <div className="text-gray-500 text-xs">
                    You have successfully withdraw 0.24495996 BNB at 2022-04-23
                    15:12:43(UTC). If this activity is now your own, please
                    contact us immediately
                  </div>
                </div>
              </div>
              <div className="relative flex items-start gap-2 px-3 py-4">
                <div onClick={() => navigate("/notification")}>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-max text-sm">Withdraw Successful</div>
                  <div className="text-gray-500 text-xs">
                    You have successfully withdraw 0.24495996 BNB at 2022-04-23
                    15:12:43(UTC). If this activity is now your own, please
                    contact us immediately
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Notification;
