import React from "react";
import Avartar from "../../asssets/images/market/nft-1.jpg";

const WarriorAvatar = () => {
  return (
    <div className="flex bg-app-black-button rounded-md justify-center items-center p-5">
      <img src={Avartar} alt="Avatar" className="w-32 h-28" />
    </div>
  );
};

export default WarriorAvatar;
