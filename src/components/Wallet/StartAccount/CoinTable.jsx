import React, { useState, useEffect } from "react";
import { tableList, tablefiatList } from "../dataList";
import SwapButton from "./SwapButton";
import TradeButton from "./TradeButton";
import BuyButton from "./BuyButton";

const CoinTable = (props) => {
  const [tempTable, setTempTable] = useState(tableList);
  useEffect(() => {
    props.idx === 0 ? setTempTable(tablefiatList) : setTempTable(tableList);
  }, [props.idx]);
  return (
    <table className="table-auto w-full mt-10">
      <thead>
        <tr>
          <td className="text-gray-400 w-1/6">Coin</td>
          <td className="text-gray-400 w-1/6">Total</td>
          <td className="text-gray-400">Available</td>
          <td className="text-gray-400">In Orders</td>
          <td className="text-gray-400">PIXP Value</td>
          <td className="text-gray-400 w-1/6">Action</td>
        </tr>
      </thead>
      <tbody className="px-4">
        {tempTable.map((menu, idx) => {
          return (
            <tr
              key={idx}
              className={
                idx !== tempTable.length - 1
                  ? "border-b-2 border-app-black"
                  : ""
              }
            >
              <td className="py-5">{menu.Coin}</td>
              <td >{menu.Total}</td>
              <td >{menu.Available}</td>
              <td>{menu.Orders}</td>
              <td>{menu.PIXP}</td>
              <td>
                <div className="flex gap-4">
                  <SwapButton title="Swap" />
                  <TradeButton title="Trade" />
                  <BuyButton title="Buy" />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CoinTable;
