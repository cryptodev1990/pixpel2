import React from "react";

const ModalHalfButton = (props) => {
  return (
    <div className="flex items-center justify-center rounded-md h-12 w-1/2 bg-app-black-button hover:bg-app-blue cursor-pointer" onClick={props.handleClick}>
      {props.title}
    </div>
  );
};

export default ModalHalfButton;
