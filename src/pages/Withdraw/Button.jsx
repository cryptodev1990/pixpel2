import React from "react";

const Button = ({ onClick, title, selected }) => {
  const className =
    "flex items-center justify-center px-8 rounded-md cursor-pointer w-max hover:bg-app-blue h-14";
  return (
    <div
      className={
        className + (selected ? " bg-app-blue" : " bg-app-black-button")
      }
      onClick={onClick}
    >
      <div className="text-lg">{title}</div>
    </div>
  );
};

export default Button;
