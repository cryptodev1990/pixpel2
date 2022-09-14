import React from "react";

const HelpCenterButton = (props) => {
  return (
    <div className="flex justify-center items-center py-2 px-8 rounded-md bg-app-black-button hover:bg-app-blue cursor-pointer">
      {props.title}
    </div>
  )
}

export default HelpCenterButton;