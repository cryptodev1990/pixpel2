import React from "react";

const TradeButton = ({title}) => {
  return <div className="flex bg-app-red py-1 px-3 h-max w-max text-sm rounded hover:cursor-pointer active:bg-violet-700">{title}</div>;
};

export default TradeButton;
