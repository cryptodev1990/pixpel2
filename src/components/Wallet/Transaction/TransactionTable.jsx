import React from "react";
import { transactionList } from "../dataList";

const TransactionTable = (props) => {
  return (
    <div className="overflow-x-auto w-full relative mt-10">
      <table className="table-auto">
        <thead>
          <tr>
            <td className="text-gray-400 w-1/6 px-6">Time</td>
            <td className="text-gray-400 w-1/6 px-6">Type</td>
            <td className="w-1/6 px-6"><div className="text-gray-400 w-max">Deposit wallet</div></td>
            <td className="text-gray-400 w-1/6 px-6">Asset</td>
            <td className="text-gray-400 w-1/6 px-6">Amount</td>
            <td className="text-gray-400 w-1/6 px-6">TxID</td>
            <td className="text-gray-400 px-6">Status</td>
          </tr>
        </thead>
        <tbody className="px-4">
          {transactionList.map((menu, idx) => {
            return (
              <tr
                key={idx}
                className={
                  idx !== transactionList.length - 1
                    ? "border-b-2 border-app-black"
                    : ""
                }
              >
                <td className="py-3 px-6">{menu.time}</td>
                <td className="px-6">{menu.type}</td>
                <td className="px-6">{menu.wallet}</td>
                <td className="px-6">{menu.asset}</td>
                <td className="px-6">{menu.amount}</td>
                <td className="px-6">{menu.TxID}</td>
                <td className="px-6">{menu.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
