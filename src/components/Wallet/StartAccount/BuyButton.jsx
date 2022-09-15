import React from "react";

const BuyButton = ({ title, handleClick }) => {
  return (
    <div
      className="flex bg-app-green py-3 px-4 h-max w-max text-sm rounded-md hover:cursor-pointer active:bg-violet-700"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default BuyButton;
