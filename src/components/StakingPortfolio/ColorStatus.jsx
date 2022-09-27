import React from "react";

const ColorStatus = ({ color, title }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className={color + " h-3 w-3 rounded-sm flex-none"} />
      <div className="font-medium">{title}</div>
    </div>
  );
};

export default ColorStatus;
