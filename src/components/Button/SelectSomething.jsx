import React from "react";

const SelectSomething = ({ title }) => {
  return (
    <div className="flex justify-between px-8 py-8 bg-app-black rounded-xl w-full">
      <div className="text-2xl">{title}</div>
      <div>
        <svg
          className="h-8 w-8 text-blue-700 flex-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    </div>
  );
};

export default SelectSomething;
