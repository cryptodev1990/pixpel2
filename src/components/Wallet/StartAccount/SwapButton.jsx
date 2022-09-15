import React from "react";

const SwapButton = ({ title, handleClick }) => {
  return (
    <div
      className="flex bg-app-blue py-3 px-4 h-max w-max text-sm rounded-md cursor-pointer active:bg-violet-700"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default SwapButton;
