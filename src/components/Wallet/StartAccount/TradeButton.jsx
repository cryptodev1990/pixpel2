import React from "react";

const TradeButton = ({title}) => {
  return <div className="flex bg-app-red py-3 px-4 h-max w-max text-sm rounded-md hover:cursor-pointer active:bg-violet-700">{title}</div>;
};

export default TradeButton;
