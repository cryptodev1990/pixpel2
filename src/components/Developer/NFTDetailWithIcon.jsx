import React from "react";

const NFTDetailWithIcon = ({ title, content, color, image }) => {
  return (
    <div className="flex flex-col gap-3 w-1/3">
      <div>{title}</div>
      <div className="flex gap-3 justify-center items-center bg-app-black rounded-lg py-6">
        <img src={image} alt="NFT" className="w-7" />
        <div className={color}>{content}</div>
      </div>
    </div>
  );
};

export default NFTDetailWithIcon;
