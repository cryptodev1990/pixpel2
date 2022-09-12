import React from "react";
import { tableList, tablefiatList } from "../dataList";
import SwapButton from "./SwapButton";
import TradeButton from "./TradeButton";
import BuyButton from "./BuyButton";

const CoinTable = (props) => {
  const [tempTable, setTempTable] = React.useState(tableList);
  React.useEffect(() => {
    props.idx === 0 ? setTempTable(tablefiatList) : setTempTable(tableList);
  }, [props.idx]);
  return (
    <table className="table-fixed w-full mt-10">
      <thead>
        <tr>
          <td className="text-gray-400">Coin</td>
          <td className="text-gray-400">Total</td>
          <td className="text-gray-400">Available</td>
          <td className="text-gray-400">In Orders</td>
          <td className="text-gray-400">PIXP Value</td>
          <td className="text-gray-400">Action</td>
        </tr>
      </thead>
      <tbody className="px-4">
        {tempTable.map((menu, idx) => {
          return (
            <tr key={idx} className="border-b-2 border-app-black">
              <td className="py-3">
                <div>{menu.Coin}</div>
              </td>
              <td className="py-3">
                <div>{menu.Total}</div>
              </td>
              <td className="flex flex-col py-2 gap-2">
                <div>{menu.Available}</div>
              </td>
              <td>
                <div>{menu.Orders}</div>
              </td>
              <td>
                <div>{menu.PIXP}</div>
              </td>
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
