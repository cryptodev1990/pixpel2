import React from "react";
import { transactionList } from "../dataList";

const TransactionTable = (props) => {
  return (
    <table className="table-fixed w-full mt-10">
      <thead>
        <tr>
          <td className="text-gray-400">Time</td>
          <td className="text-gray-400">Type</td>
          <td className="text-gray-400">Deposit wallet</td>
          <td className="text-gray-400">Asset</td>
          <td className="text-gray-400">Amount</td>
          <td className="text-gray-400">TxID</td>
          <td className="text-gray-400">Status</td>
        </tr>
      </thead>
      <tbody className="px-4">
        {transactionList.map((menu, idx) => {
          return (
            <tr key={idx} className="border-b-2 border-app-black">
              <td className="py-3">{menu.time}</td>
              <td className="py-3">{menu.type}</td>
              <td className="flex flex-col py-2 gap-2">{menu.wallet}</td>
              <td>{menu.asset}</td>
              <td>{menu.amount}</td>
              <td>{menu.TxID}</td>
              <td>{menu.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionTable;
