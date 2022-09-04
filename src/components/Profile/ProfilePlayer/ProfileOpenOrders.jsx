import React from "react";
import { tableList } from "../../../pages/Profile/datalist";
import CancelButton from "../../Button/CancelButton";

const ProfileOpenOrders = () => {
  return (
    <div>
      <div className="mt-10 font-semibold text-xl">Open Orders</div>
      <div className="flex mt-6 w-full">
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <td className="text-gray-400">Pair Date</td>
              <td className="text-gray-400">Type Conditions</td>
              <td className="text-gray-400">Price</td>
              <td className="text-gray-400">Total Filled</td>
              <td className="text-gray-400">Action</td>
            </tr>
          </thead>
          <tbody className="px-4">
            {tableList.map((menu, idx) => {
              return (
                <tr key={idx} className="border-b-2 border-app-black">
                  <td className="py-3">
                    <div>{menu.title.Pair}</div>
                    <div className="text-gray-400 text-xs">
                      {menu.title.date}
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-row">
                      <div>{menu.title.Type}</div>
                      <div className="text-red-600">{menu.title.Condition}</div>
                    </div>
                    <div className="text-gray-400">-</div>
                  </td>
                  <td>
                    <div>{menu.title.Price}</div>
                    <div className="text-gray-400 text-xs">
                      {menu.title.Price_under}
                    </div>
                  </td>
                  <td>
                    <div>{menu.title.Total}</div>
                    <div className="text-gray-400 text-xs">
                      {menu.title.TotalPercent}
                    </div>
                  </td>
                  <td>
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
