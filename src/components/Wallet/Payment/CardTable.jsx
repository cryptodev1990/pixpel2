import React from "react";
import { paymentCardList } from "../dataList";
import TradeButton from "../StartAccount/TradeButton";

const CardTable = () => {
  return (
    <table className="table-auto w-full mt-10">
      <thead>
        <tr>
          <td className="text-gray-400">Type</td>
          <td className="text-gray-400">Number</td>
          <td className="text-gray-400 w-1/12">Action</td>
        </tr>
      </thead>
      <tbody className="px-4">
        {paymentCardList.map((menu, idx) => {
          return (
            <tr
              key={idx}
              className={
                idx !== paymentCardList.length - 1
                  ? "border-b-2 border-app-black"
                  : ""
              }
            >
              <td className="py-5">{menu.type}</td>
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
