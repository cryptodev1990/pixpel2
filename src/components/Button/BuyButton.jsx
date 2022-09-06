import React from "react";

const BuyButton = (props) => {
  return (
    <div className="bg-app-green text-white rounded-md hover: cursor-pointer w-32">
      <div className="flex items-center gap-2 h-10 px-4 justify-center">
        {props.title}
      </div>
    </div>
  );
};

export default BuyButton;
