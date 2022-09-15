import React from "react";
import Avartar from "../../asssets/images/market/nft-1.jpg";

const HelpAvatar = (props) => {
  return (
    <div className="bg-app-black  flex flex-col px-5 pt-5 pb-10 items-center rounded-lg gap-3">
      <div className="bg-app-black-button rounded-md">
        <img src={Avartar} alt="Avatar" className="flex w-full" />
      </div>
      <div className="text-lg">{props.title}</div>
    </div>
  );
};

export default HelpAvatar;
