import React from "react";

const ModalHalfButton = (props) => {
  return (
    <div className="flex items-center justify-center rounded-md py-4 px-2 w-1/2 bg-app-black-button hover:bg-app-blue cursor-pointer" onClick={props.handleClick}>
      {props.title}
    </div>
  );
};

export default ModalHalfButton;
