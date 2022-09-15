import React from "react";
import ImageDropDownButton from "../../DropDown/ImageDropDownButton";
import DropDownButton from "../../DropDown/DropDownButton";
import { FiatList, PaymentList } from "../dataList";

const Setting = () => {
  return (
    <div className="flex gap-5 justify-center">
      <div className="flex flex-col gap-2">
        <div>Amount</div>
        <div className="rounded flex items-center px-3 bg-app-black-button py-2">
          <input
            className="text-gray-400 text-sm bg-app-black-button"
            placeholder="Enter Amount"
          ></input>
          <div className=" border-r-2 px-3 border-gray-500 mr-2 text-lg">
            UAH
          </div>
          <div className="text-app-blue text-sm">Search</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Fiat</div>
        <ImageDropDownButton
          initialContent={FiatList[0]}
          contentList={FiatList}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>Payment</div>
        <DropDownButton
          initialContent={PaymentList[0].title}
          contentList={PaymentList}
        />
      </div>
    </div>
  );
};

export default Setting;
