import React from "react";

const OfferMenu = ({ title }) => {
  return (
    <div className="bg-app-black-button rounded-md flex flex-col items-center py-16 w-1/4">
      <div>
        <div className="text-3xl font-medium mb-2">{title}</div>
        <div className="text-app-blue text-lg gap-1">
          Total: 000000
          <br />
          Minted: 000000
          <br />
          Remaining: 000000
        </div>
      </div>
    </div>
  );
};

export default OfferMenu;
