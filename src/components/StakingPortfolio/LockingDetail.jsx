import React, { useState } from "react";
import { useEffect } from "react";

const LockingDetail = ({ title, locked, day }) => {
  const [lock, setLock] = useState("");
  useEffect(() => {
    locked ? setLock("LOCKED") : setLock("UNLOCKED");
  }, [locked]);
  return (
    <div className="flex flex-col bg-app-black px-8 py-8 rounded-lg">
      <div className="flex justify-between gap-8 mb-7">
        <div className="font-medium">{title}</div>
        <div className="flex gap-4 text-sm">
          <div className={(locked ? "text-app-green" : "text-app-red") + " font-medium"}>{lock}</div>
          <div className="font-medium">{day}</div>
        </div>
      </div>
      <div className="bg-app-black-button rounded-lg px-7 py-5 flex justify-between mb-3">
        <div>MAX CAP:</div>
        <div className="text-app-blue">2.000.000 PIXP = 400.000 BUSD</div>
      </div>
      <div className="flex gap-3">
        <div className="flex justify-between px-7 py-5 bg-app-black-button rounded-lg w-1/4">
          <div>APR:</div>
          <div className="text-app-blue">8%</div>
        </div>
        <div className="flex justify-between px-7 py-5 bg-app-black-button rounded-lg w-3/4">
          <div>APR TO BE PAID</div>
          <div className="text-app-blue">32.000 BUSD</div>
        </div>
      </div>
    </div>
  );
};

export default LockingDetail;
