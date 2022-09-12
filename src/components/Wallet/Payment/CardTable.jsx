import React from "react";
import { paymentCardList } from "../dataList";
import TradeButton from "./TradeButton";

const CardTable = () => {
  return (
    <table className="table-fixed w-full mt-10">
      <thead>
        <tr>
          <td className="text-gray-400">Type</td>
          <td className="text-gray-400">Number</td>
          <td className="text-gray-400">Action</td>
        </tr>
      </thead>
      <tbody className="px-4">
        {paymentCardList.map((menu, idx) => {
          return (
            <tr key={idx} className="border-b-2 border-app-black">
              <td>{menu.type}</td>
              <td>{menu.Number}</td>
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

export default CardTable;
