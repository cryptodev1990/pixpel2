import React from "react";

const Probability = ({ percent, height }) => {
  return (
    <div
      className="rounded bg-app-black w-full relative"
      style={{ height: `${height}px` }}
    >
      <div className="absolute w-full h-full flex justify-center items-center">
        {percent}%
      </div>
      <div
        className="bg-app-blue rounded h-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default Probability;
