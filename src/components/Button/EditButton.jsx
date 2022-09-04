import React from "react";
const EditButton = (props) => {
  return (
    <div className="bg-app-black text-white rounded-md w-auto h-10 mx-2 py-2 hover: cursor-pointer">
      <div className="gap-2 px-6 justify-center items-center">
        <button>{props.title}</button>
      </div>
    </div>
  )
}
export default EditButton