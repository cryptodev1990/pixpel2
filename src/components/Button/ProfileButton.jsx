import React from "react";

const ProfileButton = ({handleClick, idx, title, selected}) => {

  const className = "rounded-md hover:bg-app-blue cursor-pointer";
  const pictureClassName = "bg-app-black-select h-5 w-5";
  return (
    <div className={className + (selected ? " bg-app-blue" : " bg-app-black-button")} onClick={handleClick}>
      <div className="flex items-center gap-3 h-12 px-6">
        <div className={pictureClassName + (selected? " rounded-full" : "")}></div>
        {title}
      </div>
    </div>
  )
}
export default ProfileButton