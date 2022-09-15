import React from "react";

const BankButton = ({ title, handleClick }) => {
  return (
    <div
      className="flex w-full justify-center items-center py-3 bg-app-black-button rounded-md cursor-pointer xs:text-base text-xs"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default BankButton;
