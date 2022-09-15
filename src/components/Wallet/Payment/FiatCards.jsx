import React from "react";

const FiatCards = () => {
  return (
    <div className="flex justify-between w-full h-max py-8 px-5 bg-app-black rounded-lg items-baseline gap-5">
      <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg">Payment Method to get Crypto & Token</div>
      <div className="bg-app-blue rounded-md px-3 py-2 hover:cursor-pointer active:bg-green-600">Deposit</div>
    </div>
  );
};

export default FiatCards;
