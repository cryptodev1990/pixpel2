import React from "react";

const SwapButton = ({title}) => {
  return <div className="flex bg-app-blue py-1 px-3 h-max w-max text-sm rounded hover:cursor-pointer active:bg-violet-700">{title}</div>;
};

export default SwapButton;
