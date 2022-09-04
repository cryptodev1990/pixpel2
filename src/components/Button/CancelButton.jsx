import React from "react";
const CancelButton = (props) => {
  return (
    <div className="bg-app-red text-white rounded-md hover: cursor-pointer w-32">
      <div className="flex items-center gap-2 h-8 px-4">
        {props.title}
      </div>
    </div>
  )
}
export default CancelButton