import React from "react";

const ModalSelectHalfButton = ({ title, selected, handleClick }) => {
  const className = "rounded-full w-3 h-3";
  return (
    <div className="flex items-center gap-3 justify-center rounded-md h-12 w-1/2 bg-app-black-button hover:cursor-pointer" onClick={handleClick}>
      <div
        className={className + (selected ? " bg-app-green" : " bg-app-red")}
      ></div>
      {title}
    </div>
  );
};

export default ModalSelectHalfButton;
