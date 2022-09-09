import React from "react";

const TokenButton = ({ handleClick, title, idx, selected }) => {
  const className = "rounded-md hover:bg-app-blue active:bg-app-black-light cursor-pointer";

  return (
    <div className={className + (selected ? " bg-app-blue": " bg-app-black")} onClick={handleClick}>
      <div className="flex items-center justify-center gap-2 h-max px-4 xl:px-12 lg:px-9 md:px-6 py-2">
        {title}
      </div>
    </div>
  );
};
export default TokenButton;
