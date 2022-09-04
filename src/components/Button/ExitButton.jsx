import React from "react";
const ExitButton = (props) => {
  return (
    <div className="bg-app-black-button w-28 rounded-md hover: cursor-pointer">
      <div className="text-red-700 flex gap-2 h-8 px-4 items-center justify-center">
        Exit
      </div>
    </div>
  )
}
export default ExitButton;