import React from "react";
const CancelButton = (props) => {
  return (
    <div className="bg-app-red rounded-md cursor-pointer active:bg-violet-700">
      <div className="flex items-center h-max w-max py-3 px-4 justify-center">
        {props.title}
      </div>
    </div>
  )
}
export default CancelButton