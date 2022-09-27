import React from "react";
import ImageDropDownButton from "../../../components/DropDown/ImageDropDownButton";
import DropDownButton from "../../../components/DropDown/DropDownButton";
import { FiatList, PaymentList } from "../../../components/Crypto/dataList";

const Setting = () => {
  return (
    <div className="flex flex-col justify-center w-full gap-5 sm:flex-row shrink-0 2xs:w-auto">
      <div className="flex flex-col gap-2">
        <div>Amount</div>
        <div className="flex items-center h-16 px-3 py-2 rounded bg-app-black-button">
          <input
            className="flex w-full text-sm text-gray-400 2xs:w-max bg-app-black-button"
            placeholder="Enter Amount"
          ></input>
          <div className="px-3 mr-2 text-lg border-r-2 border-gray-500 ">
            UAH
          </div>
          <div className="text-sm text-app-blue">Search</div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full gap-4 2xs:flex-row">
        <div className="flex flex-col w-full gap-2">
          <div>Fiat</div>
          <div className="h-16 bg-app-black-button rounded-md">
            <ImageDropDownButton
              initialContent={FiatList[0]}
              contentList={FiatList}
              backgroundColor={" bg-app-black-button "}
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div>Payment</div>
          <div className="h-16 bg-app-black-button rounded-md">
            <DropDownButton
              initialContent={PaymentList[0].title}
              contentList={PaymentList}
              backgroundColor="bg-app-black-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
