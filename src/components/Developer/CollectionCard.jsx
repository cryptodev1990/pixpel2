import React from "react";
import NFT from "../../asssets/images/home/main__bg.jpg";
import Wallet from "../../asssets/images/wallet.svg";

const CollectionCard = () => {
  return (
    <div className="bg-app-black rounded-md pb-5">
      <div className="brightness-125">
        <img src={NFT} alt="NFT" className="rounded-md brightness-200" />
      </div>
      <div className="relative flex justify-center bottom-11">
        <div className="bg-app-blue flex justify-center items-center p-6 w-max rounded-md">
          <img src={Wallet} alt="Wallet" />
        </div>
      </div>
      <div className="bg-app-black-button my-3 mx-5 flex items-center justify-center py-5 rounded-md hover:bg-app-blue cursor-pointer">
        The Archer
      </div>
      <div className="bg-app-black-button my-3 mx-5 flex items-center justify-center py-5 rounded-md hover:bg-app-blue cursor-pointer">
        Archer Character
      </div>
      <div className="bg-app-black-button my-3 mx-5 flex items-center justify-center py-5 rounded-md hover:bg-app-blue cursor-pointer">
        1000 items
      </div>
    </div>
  );
};

export default CollectionCard;
