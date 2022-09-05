import React from "react";
const SecurityButton = ({title, idx, handleClick, selected}) => {
  const className = "rounded-full w-3 h-3";
  return (
    <div
      className="bg-app-black-button h-12 w-auto items-center justify-center flex rounded-md gap-3 px-8 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={className + (selected ? " bg-app-green" : " bg-app-red")}
      ></div>
      {title}
    </div>
  );
};
export default SecurityButton;
