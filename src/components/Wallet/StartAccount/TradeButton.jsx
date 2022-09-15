import React from "react";

const TradeButton = ({ title, handleClick }) => {
  return (
    <div
      className="flex bg-app-red py-3 px-4 h-max w-max text-sm rounded-md hover:cursor-pointer active:bg-violet-700"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default TradeButton;
