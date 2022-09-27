import React, { useState } from "react";
import { useEffect } from "react";

const LockingDetail = ({ title, locked, day }) => {
  const [lock, setLock] = useState("");
  useEffect(() => {
    locked ? setLock("LOCKED") : setLock("UNLOCKED");
  }, [locked]);
  return (
    <div className="flex flex-col bg-app-black 2xl:px-8 xl:px-6 md:px-4 px-2 2xl:py-8 lg:py-6 sm:py-4 py-2 rounded-lg">
      <div className="flex justify-between sm:gap-8 gap-5 mb-7">
        <div className="font-medium">{title}</div>
        <div className="flex sm:gap-4 gap-3 text-sm">
          <div className={(locked ? "text-app-green" : "text-app-red") + " font-medium"}>{lock}</div>
          <div className="font-medium">{day}</div>
        </div>
      </div>
      <div className="bg-app-black-button rounded-lg 2xl:px-7 xl:px-5 sm:px-4 px-2 2xl:py-5 py-4 flex justify-between mb-3">
        <div>MAX CAP:</div>
        <div className="text-app-blue">2.000.000 PIXP = 400.000 BUSD</div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col 2xs:flex-row justify-between 2xl:px-7 xl:px-5 sm:px-4 px-2 2xl:py-5 py-4 bg-app-black-button rounded-lg w-1/4">
          <div>APR:</div>
          <div className="text-app-blue">8%</div>
        </div>
        <div className="flex justify-between 2xl:px-7 xl:px-5 sm:px-4 px-2 2xl:py-5 py-4 bg-app-black-button rounded-lg w-3/4">
          <div>APR TO BE PAID</div>
          <div className="text-app-blue">32.000 BUSD</div>
        </div>
      </div>
    </div>
  );
};

export default LockingDetail;
