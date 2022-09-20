import React from "react";

const NFTintro = ({ image, name, bid }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className='w-72 h-72' style={{backgroundImage: `url(${image})`}}>
        <div className="relative bg-app-black-button h-16 w-16 left-52 top-4" />
      </div>
      <div className="flex justify-between">
        <div className="text-gray-500">Name</div>
        <div className="text-gray-500">Bid</div>
      </div>
      <div className="flex justify-between">
        <div className="text-xl">{name}</div>
        <div className="text-app-blue text-xl">{bid}</div>
      </div>
    </div>
  );
};

export default NFTintro;
