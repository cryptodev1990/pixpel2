import React from "react";

const NotificationButton = ({ title, selected, handleClick }) => {
  const className = "rounded-full w-2 h-2 mx-2 flex-none";
  return (
    <div
      className="flex items-center bg-app-black rounded-md px-6 py-2 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={className + (selected ? " bg-app-green" : " bg-app-red")}
      ></div>
      <div>{title}</div>
    </div>
  );
};

export default NotificationButton;
