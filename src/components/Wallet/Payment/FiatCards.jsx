import React from "react";

const FiatCards = () => {
  return (
    <div className="flex justify-between w-full h-max py-8 md:px-5 px-2 bg-app-black rounded-lg items-baseline flex-col md:flex-row gap-4">
      <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg">Payment Method to get Crypto & Token</div>
      <div className="bg-app-blue rounded-md px-5 py-2 hover:cursor-pointer active:bg-green-600">Deposit</div>
    </div>
  );
};

export default FiatCards;
