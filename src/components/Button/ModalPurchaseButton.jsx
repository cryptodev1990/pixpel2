import React from "react";

const ModalPurchaseButton = ({ title, selected, handleClick }) => {
  const className = "rounded-full w-3 h-3";
  return (
    <div className="flex justify-center gap-3 items-center h-12 px-6 rounded-lg bg-app-black-button hover:cursor-pointer" onClick={handleClick}>
      <div
        className={className + (selected ? " bg-app-green" : " bg-app-red")}
      ></div>
      {title}
    </div>
  );
};

export default ModalPurchaseButton;
