import React, { useState, useEffect } from "react";
import { tableList, tablefiatList } from "../dataList";
import SwapButton from "./SwapButton";
import TradeButton from "./TradeButton";
import { useNavigate } from "react-router-dom";
import BuyButton from "./BuyButton";

const CoinTable = (props) => {
  const navigate = useNavigate();
  const [tempTable, setTempTable] = useState(tableList);

  useEffect(() => {
    props.idx === 0 ? setTempTable(tablefiatList) : setTempTable(tableList);
  }, [props.idx]);

  const handleSwapClick = () => {
    navigate("/swap-master");
  };

  const handleTradeClick = () => {
    navigate("/exchange");
  };

  return (
    <div className="overflow-x-auto relative mt-10 w-full">
      <table className="table-auto">
        <thead>
          <tr>
            <td className="text-gray-400 w-1/6 px-6">Coin</td>
            <td className="text-gray-400 w-1/6 px-6">Total</td>
            <td className="text-gray-400 px-6">Available</td>
            <td className="text-gray-400 px-6">In Orders</td>
            <td className="text-gray-400 px-6">PIXP Value</td>
            <td className="text-gray-400 w-1/6 px-6">Action</td>
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
                <td className="py-5 px-6">{menu.Coin}</td>
                <td className="px-6">{menu.Total}</td>
                <td className="px-6">{menu.Available}</td>
                <td className="px-6">{menu.Orders}</td>
                <td className="px-6">{menu.PIXP}</td>
                <td className="px-6">
                  <div className="flex gap-4">
                    <SwapButton title="Swap" handleClick={handleSwapClick} />
                    <TradeButton title="Trade" handleClick={handleTradeClick} />
                    <BuyButton title="Buy" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
