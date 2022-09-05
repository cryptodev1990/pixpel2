import React from "react";
const EnableButton = (props) => {
  return (
    <div className="bg-app-blue text-white rounded-md w-auto h-10 py-2 hover: cursor-pointer">
      <div className="gap-2 px-6 justify-center items-center">
        <button>{props.title}</button>
      </div>
    </div>
  )
}
export default EnableButton