import React from "react";
import Transfer from "../../Button/TransferButton";

const Account = ({ title }) => {
  return (
    <div className="flex flex-col px-5 py-7 bg-app-black rounded-lg">
      <div className="mb-5 text-lg">{title}</div>
      <div className="flex gap-3 xs:items-center mb-5 xs:flex-row flex-col">
        <div className="flex items-center rounded bg-app-black-button text-blue-400 py-2 pl-2 pr-5">
          50,000 USDT
        </div>
        <div className="text-gray-400">=3,000,000.00 PIXP</div>
      </div>
      <Transfer />
    </div>
  );
};

export default Account;
