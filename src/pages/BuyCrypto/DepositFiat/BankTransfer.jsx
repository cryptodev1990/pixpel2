import React from "react";
import DropDownButton from "../../../components/DropDown/DropDownButton";
import Button from "../../../components/Button/Button";
import { useAppContext } from "../../../contexts/AppContext";
const BankTransfer = () => {
  const context = useAppContext();
  const bankList = [
    {
      id: 1,
      title: "HSVE BANK",
    },
    {
      id: 2,
      title: "HSVE BANK",
    },
    {
      id: 3,
      title: "HSVE BANK",
    },
  ];

  const accountTypeList = [
    {
      id: 1,
      title: "Country",
    },
    {
      id: 2,
      title: "Country",
    },
    {
      id: 3,
      title: "Country",
    },
  ];

  const countryList = [
    {
      id: 1,
      title: "United States",
    },
    {
      id: 2,
      title: "United States",
    },
    {
      id: 3,
      title: "United States",
    },
  ];

  const cuurencyList = [
    {
      id: 1,
      title: "USD",
    },
    {
      id: 2,
      title: "USD",
    },
    {
      id: 3,
      title: "USD",
    },
  ];

  return (
    <div className="flex flex-col xl:w-[1080px] w-full">
      <div className="flex md:flex-row mt-[60px] w-full gap-4 flex-col">
        <div className="flex flex-col w-full gap-4 2xs:flex-row md:w-1/2">
          <div className="flex flex-col w-full gap-4 2xs:w-1/2">
            <div className="flex text-lg truncate">Selected Your Bank</div>
            <div className="justify-center flex-none w-full h-16">
              <DropDownButton
                initialContent={"BBVA"}
                contentList={bankList}
                backgroundColor="bg-app-black-button"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 2xs:w-1/2">
            <div className="flex text-lg">Account Owner:</div>
            <div className="justify-center flex-none w-full h-15">
              <input
                className="w-full h-full px-5 rounded-md placeholder:text-gray-500 bg-app-black-button"
                placeholder="Jonshon walirs"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 2xs:flex-row md:w-1/2">
          <div className="flex flex-col w-full gap-4 2xs:w-1/2">
            <div className="flex text-lg">Account Type</div>
            <div className="justify-center flex-none w-full h-16">
              <DropDownButton
                initialContent={"Country"}
                contentList={accountTypeList}
                backgroundColor="bg-app-black-button"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 2xs:w-1/2">
            <div className="flex text-lg">Country</div>
            <div className="justify-center flex-none w-full h-16">
              <DropDownButton
                initialContent={"United States"}
                contentList={countryList}
                backgroundColor="bg-app-black-button"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex 2xs:flex-row mt-[30px] w-full gap-4 flex-col">
        <div className="flex flex-col w-full gap-4 2xs:w-2/3 2xs:flex-row 1xs:w-1/2">
          <div className="flex flex-col w-full gap-4 2xs:w-1/2">
            <div className="flex text-lg">Currency:</div>
            <div className="justify-center flex-none w-full h-16">
              <DropDownButton
                initialContent={"USD"}
                contentList={cuurencyList}
                backgroundColor="bg-app-black-button"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 2xs:w-1/2">
            <div className="flex text-lg">Account:</div>
            <div className="justify-center flex-none w-full h-15">
              <input
                className="w-full h-full px-5 rounded-md placeholder:text-gray-500 bg-app-black-button"
                placeholder="Account Number"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full 2xs:w-1/3 1xs:w-1/2 ">
          <div className="flex flex-col w-full gap-4 md:w-1/2">
            <div className="flex text-lg truncate">Routing Number:</div>
            <div className="justify-center flex-none w-full h-15">
              <input
                className="w-full h-full px-5 rounded-md placeholder:text-gray-500 bg-app-black-button"
                placeholder="Routing Number"
              />
            </div>
          </div>
          <div className="flex flex-col w-0 gap-4 md:w-1/2"></div>
        </div>
      </div>

      <div className="flex flex-col mt-[35px]">
        <div className="text-lg font-semiboldbold">Input Deposit Amount:</div>
        <div className="flex flex-col w-full gap-10 mt-4 md:flex-row">
          <div className="flex flex-col w-full gap-3 md:w-1/2">
            <div className="flex flex-row items-center justify-between w-full h-16 px-8 rounded-md bg-app-black-button">
              <input
                className="w-full placeholder:text-gray-500 bg-app-black-button"
                placeholder="100,000,000"
              />
              <div className="text-base font-medium">USD</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="text-sm text-normal">$999,200 Total Received</div>
              <div className="text-sm text-gray-500 text-normal">
                $200, 2% transaction fee
              </div>
            </div>
          </div>
          <div className="flex w-full 1xs:w-1/2">
            <Button
              title={"Confirm"}
              selected={true}
              buttonStyle=" w-[520px] h-16 "
              fontStyle=" text-base font-medium"
              onClick={() => {
                context.setBuyCryptoState(4);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
