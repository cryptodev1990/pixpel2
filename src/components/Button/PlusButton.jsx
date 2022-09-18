import React from "react";

const PlusButton = () => {
  return (
    <div className="flex justify-center items-center w-max h-max px-8 py-8 bg-app-black rounded-xl cursor-pointer">
      <svg
        className="h-8 w-8 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </div>
  );
};

export default PlusButton;
