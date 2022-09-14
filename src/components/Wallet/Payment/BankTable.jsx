import React from "react";
import { paymentBankList } from "../dataList";
import TradeButton from "../StartAccount/TradeButton";

const BankTable = () => {
  return (
    <div className="overflow-x-auto relative mt-10 w-full">
    <table className="table-auto text-left">
      <thead>
        <tr>
          <td className="text-gray-400 px-6">Name</td>
          <td className="text-gray-400 px-6">Bank Account</td>
          <td className="text-gray-400 px-6">Bank Name</td>
          <td className="text-gray-400 w-1/12 px-6">Action</td>
        </tr>
      </thead>
      <tbody className="px-4">
        {paymentBankList.map((menu, idx) => {
          return (
            <tr
              key={idx}
              className={
                idx !== paymentBankList.length - 1
                  ? "border-b-2 border-app-black"
                  : ""
              }
            >
              <td className="py-5 px-6">{menu.name}</td>
              <td className="px-6">{menu.bankAccount}</td>
              <td className="px-6">{menu.bankName}</td>
              <td className="px-6">
                <TradeButton title="Remove" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default BankTable;
