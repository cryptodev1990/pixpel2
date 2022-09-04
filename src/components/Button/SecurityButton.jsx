import React from "react";
const SecurityButton = (props) => {
  return (
    <div className="bg-app-black-button h-12 w-auto items-center justify-center flex rounded-md gap-3 px-8 hover: cursor-pointer">
      <div className="bg-app-green rounded-full w-3 h-3"></div>
      <div>{props.title}</div>
    </div>
  );
};
export default SecurityButton;
