import React, { useEffect, useState } from "react";
import Clock from "../../../asssets/images/clock.svg";
import TransactionHistoryButton from "../../Button/TransactionHistoryButton";

const StartAccountOverview = ({ selected }) => {
  const className =
    "flex gap-3 items-center pl-5 pr-12 bg-app-black-button h-max rounded-md py-3 w-max";
  const [tempBalance, setTempBalance] = useState("");
  useEffect(() => {
    selected === 0
      ? setTempBalance("Fiat Balance")
      : setTempBalance("Token balance");
  }, [selected]);
  return (
    <div className="flex justify-between w-full h-max pt-4 pb-10 px-10 bg-app-black rounded-lg">
      <div className="flex flex-col w-full">
        <div className="flex md:flex-row flex-col gap-3 justify-between mb-8 md:items-end">
          <div className="text-xl font-bold">START ACCOUNT</div>
          <TransactionHistoryButton />
        </div>
        <div className="flex xl:flex-row flex-col xl:items-end pr-16 gap-10">
          <div className="flex w-5/6 justify-between">
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 mb-2">
                Estimated balance
              </div>
              <div className="flex md:flex-row flex-col gap-3 md:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                <div className="text-base">300.000 PIXP</div>
                <div className="text-gray-400 text-sm">
                  = 3,832,194,124.10 TUSD
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 mb-2">{tempBalance}</div>
              <div className="flex md:flex-row flex-col gap-3 md:items-center pl-5 pr-10 w-full bg-app-black-button py-3 rounded-md">
                <div className="text-base">300.000 PIXP</div>
                <div className="text-gray-400 text-sm">
                  = 3,832,194,124.10 TUSD
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className={className + (selected === 0 ? " hidden" : "")}>
              <img src={Clock} alt="history" />
              <div>History</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartAccountOverview;
