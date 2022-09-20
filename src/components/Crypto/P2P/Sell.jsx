import React from "react";
import CancelButton from "../../Button/CancelButton";
import { sellList } from "../dataList";

const Sell = () => {
  return (
    <table className="table-auto w-full mt-10">
      <thead>
        <tr>
          <td className="text-gray-400 w-1/5">User</td>
          <td className="text-gray-400 w-1/5">Price</td>
          <td className="text-gray-400 w-1/3">Limit/Available</td>
          <td className="text-gray-400 w-1/4">Terms</td>
          <td className="text-gray-400">Action</td>
        </tr>
      </thead>
      <tbody className="px-4">
        {sellList.map((menu, idx) => {
          return (
            <tr key={idx} className="border-b-2 border-app-black">
              <td className="py-3">
                <div>{menu.User}</div>
              </td>
              <td className="py-3">
                <div>{menu.Price}</div>
              </td>
              <td className="flex flex-col py-2 gap-2">
                <div className="flex">
                  <div className="text-gray-400 w-1/3">Available</div>
                  <div>{menu.Limit.Available}</div>
                </div>
                <div className="flex">
                  <div className="text-gray-400 w-1/3">Limit</div>
                  <div>{menu.Limit.Limit}</div>
                </div>
              </td>
              <td>
                <div className="w-1/2">{menu.Terms}</div>
              </td>
              <td>
                <CancelButton title={menu.Action}></CancelButton>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Sell;
