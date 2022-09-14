import React from "react";
import { tableList } from "../../../pages/Profile/datalist";
import CancelButton from "../../Button/CancelButton";

const ProfileOpenOrders = () => {
  return (
    <div>
      <div className="mt-10 font-semibold text-xl">Open Orders</div>
      <div className="overflow-x-auto relative mt-6 w-full">
        <table className="table-auto text-left">
          <thead>
            <tr>
              <td className="text-gray-400 px-6">Pair Date</td>
              <td className="text-gray-400 px-6">Type Conditions</td>
              <td className="text-gray-400 px-6">Price</td>
              <td className="text-gray-400 px-6">Total Filled</td>
              <td className="text-gray-400 w-1/12 px-6">Action</td>
            </tr>
          </thead>
          <tbody>
            {tableList.map((menu, idx) => {
              return (
                <tr
                  key={idx}
                  className={
                    idx !== tableList.length - 1
                      ? "border-b-2 border-app-black"
                      : ""
                  }
                >
                  <td className="py-3 px-6">
                    <div>{menu.title.Pair}</div>
                    <div className="text-gray-400 text-xs">
                      {menu.title.date}
                    </div>
                  </td>
                  <td className="px-6">
                    <div className="flex flex-row">
                      <div>{menu.title.Type}</div>
                      <div className="text-red-600">{menu.title.Condition}</div>
                    </div>
                    <div className="text-gray-400">-</div>
                  </td>
                  <td className="px-6">
                    <div>{menu.title.Price}</div>
                    <div className="text-gray-400 text-xs">
                      {menu.title.Price_under}
                    </div>
                  </td>
                  <td className="px-6">
                    <div>{menu.title.Total}</div>
                    <div className="text-gray-400 text-xs">
                      {menu.title.TotalPercent}
                    </div>
                  </td>
                  <td className="px-6">
                    <CancelButton title={menu.title.Action}></CancelButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileOpenOrders;
