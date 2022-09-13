import React from "react";

const ProfileButton = ({handleClick, idx, title, selected}) => {

  const className = "rounded-md hover:bg-app-blue cursor-pointer";
  const pictureClassName = "bg-app-black-select h-5 w-5 flex-none";
  return (
    <div className={className + (selected ? " bg-app-blue" : " bg-app-black-button")} onClick={handleClick}>
      <div className="flex flex-row items-center gap-3 px-6 py-4">
        <div className={pictureClassName + (selected? " rounded-full" : "")}></div>
        {title}
      </div>
    </div>
  )
}
export default ProfileButton