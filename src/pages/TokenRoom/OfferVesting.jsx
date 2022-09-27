import React from "react";
import VestingDetail from "../../components/TokenRoom/VestingDetail";

const OfferVesting = () => {
  return (
    <>
      <div className="flex justify-center text-2xl">VESTING SCHEDULE</div>
      <div className="my-12 gap-5 flex flex-col">
        <VestingDetail number={1} />
        <VestingDetail number={2} />
        <VestingDetail number={3} />
        <VestingDetail number={4} />
        <VestingDetail number={5} />
      </div>
      <div className="w-max py-4 px-8 bg-app-green rounded-lg">+ ADD MORE</div>
      <div className="flex justify-center">
        <div className="bg-app-blue rounded-md py-5 px-24 my-10">VEST</div>
      </div>
    </>
  );
};

export default OfferVesting;
