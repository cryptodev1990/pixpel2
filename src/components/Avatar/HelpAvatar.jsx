import React from "react";
import Avartar from "../../asssets/images/market/nft-1.jpg";

const HelpAvatar = () => {
  return (
    <div className="w-80 h-80 bg-app-black rounded-md items-center justify-center">
      <div className="w-20 h-20 rounded bg-app-black-button" />
      <img src={Avartar} alt="avatar">
      </img>
    </div>
  );
};

export default HelpAvatar;
