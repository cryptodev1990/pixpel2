import React from "react";
import Union from "../../asssets/images/Union.svg";

const AddNFT = ({ handleClick }) => {
  return (
    <div
      className="w-80 h-80 bg-app-black rounded-md flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      <img src={Union} alt="add"></img>
    </div>
  );
};

export default AddNFT;
