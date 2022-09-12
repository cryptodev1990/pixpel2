import React from "react";
import { paymentBankList } from "../dataList";
import TradeButton from "../StartAccount/TradeButton";

const BankTable = () => {
  return (
    <table className="table-fixed w-full mt-10">
      <thead>
        <tr>
          <td className="text-gray-400">Name</td>
          <td className="text-gray-400">Bank Account</td>
          <td className="text-gray-400">Bank Name</td>
          <td className="text-gray-400">Action</td>
        </tr>
      </thead>
      <tbody className="px-4">
        {paymentBankList.map((menu, idx) => {
          return (
            <tr key={idx} className="border-b-2 border-app-black">
              <td className="px-3 py-4">{menu.name}</td>
              <td>{menu.bankAccount}</td>
              <td>{menu.bankName}</td>
              <td>
                <TradeButton title="Remove" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BankTable;
