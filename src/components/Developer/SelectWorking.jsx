import React from "react";

const SelectWorking = (props) => {
  return (
    <div className="bg-app-black px-28 py-20 rounded-3xl">
      <div className=" w-3/5">
        <div className="text-6xl mb-2 font-semibold leading-relaxed">{props.title}</div>
        <div className="text-gray-500 text-lg mb-16">{props.content}</div>
        <div
          className="bg-app-blue flex justify-center items-center px-28 py-7 w-max cursor-pointer active:bg-app-black-light rounded-lg"
          onClick={props.handleClick}
        >
          {props.button}
        </div>
      </div>
    </div>
  );
};

export default SelectWorking;
