import React from "react";
const EnableButton = (props) => {
  return (
    <div className="flex bg-app-blue px-6 justify-center items-center rounded-md py-2 cursor-pointer">
        {props.title}
    </div>
  )
}
export default EnableButton