import React from "react";

const SelectWorking = (props) => {
  return (
    <div className="bg-app-black 2xl1:px-28 xl1:px-24 lg1:px-20 md1:px-16 sm1:px-12 xs:px-8 px-4 xl:py-20 lg:py-16 md:py-12 sm:py-8 py-6 rounded-3xl">
      <div className="lg:w-3/5 w-full">
        <div className="3xl1:text-6xl 2xl1:text-5xl xl1:text-4xl lg1:text-3xl md1:text-2xl sm1:text-xl xs:text-lg text-base mb-2 font-semibold leading-relaxed">{props.title}</div>
        <div className="text-gray-500 xl:text-lg md:text-base text-sm xl:mb-16 lg:mb-12 md:mb-9 sm:mb-6 mb-3">{props.content}</div>
        <div
          className="bg-app-blue flex justify-center items-center 2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 2xl:py-7 xl:py-6 lg:py-5 md:py-4 sm:py-3 py-2 w-max cursor-pointer active:bg-app-black-light rounded-lg"
          onClick={props.handleClick}
        >
          {props.button}
        </div>
      </div>
    </div>
  );
};

export default SelectWorking;
