import React from "react";

const SelectWorking = (props) => {
  return (
    <div className="bg-app-black px-28 py-20 rounded-3xl">
      <div className=" w-3/5">
        <div className="3xl1:text-6xl 2xl1:text-5xl xl1:text-4xl lg1:text-3xl md1:text-2xl sm1:text-xl xs:text-lg mb-2 font-semibold leading-relaxed">{props.title}</div>
        <div className="text-gray-500 text-lg mb-16">{props.content}</div>
        <div
          className="bg-app-blue flex justify-center items-center 3xl:px-28 2xl:px-24 xl:px-20 lg:px-16 md:px-12 sm:px-10 px-8 3xl:py-7 py-2 w-max cursor-pointer active:bg-app-black-light rounded-lg"
          onClick={props.handleClick}
        >
          {props.button}
        </div>
      </div>
    </div>
  );
};

export default SelectWorking;
