import React from "react";
import NFT from "../../asssets/images/market/nft-1.jpg";

const NFTAvatar = () => {
  return (
    <div className="flex w-24 h-24 bg-app-black-button rounded-md items-center justify-center">
      <img src={NFT} alt="NFT" className="w-20 h-20 rounded bg-app-black-button" />
    </div>
  );
};

export default NFTAvatar;
