import React from "react";
import Arrow from "../../asssets/images/arrow.svg";

const ExitButton = () => {
  return (
    <div className="flex bg-app-black-button rounded-md cursor-pointer px-10 py-2 h-max gap-3">
      <div className="text-app-red font-medium text-lg">Exit</div>
      <img src={Arrow} alt="arrow" />
    </div>
  );
};
export default ExitButton;
