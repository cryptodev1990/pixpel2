import React from "react";

const Button = ({ title }) => {
  return (
    <div className="bg-app-blue flex justify-center w-60 py-6 text-black rounded-md text-2xl font-semibold cursor-pointer">{title}</div>
  );
};

export default Button;
