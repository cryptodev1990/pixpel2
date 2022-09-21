import React from "react";

const Button = ({ title, handleClick }) => {
  return (
    <div
      className="bg-app-blue 2xl:py-6 xl:py-5 lg:py-4 md:py-3 sm:py-2 py-1 2xl:px-24 xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 w-max text-black rounded-md 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs font-medium cursor-pointer"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default Button;
