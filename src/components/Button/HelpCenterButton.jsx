import React from "react";

const HelpCenterButton = (props) => {
  return (
    <div className="flex justify-center items-center h-16 rounded-lg bg-app-black text-2xl hover:bg-app-blue cursor-pointer">
      {props.title}
    </div>
  )
}

export default HelpCenterButton;