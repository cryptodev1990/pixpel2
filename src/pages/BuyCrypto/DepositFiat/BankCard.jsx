import React from "react";
import DropDownButton from '../../../components/DropDown/DropDownButton';
import Button from '../../../components/Button/Button';
import { useAppContext } from "../../../contexts/AppContext";

const BankCard = (props) => {
  
  const context = useAppContext();
  const cardList = [
    {
      id:1,
      title:"VISA ****4394"
    },
    {
      id:2,
      title:"VISA ****4394"
    },
    {
      id:3,
      title:"VISA ****4394"
    },
  ];
  
 return(
  <div className="xl:w-[1080px] w-full">
    <div className="flex flex-col mt-[60px] gap-4">
      <div className="flex flex-col">
        <div className="flex w-full text-lg">
          Selected Card
        </div>
        <div className="flex flex-col w-full gap-4 1xs:items-center 1xs:gap-8 1xs:flex-row">
          <div className="flex-none 1xs:w-[270px] w-full h-16 justify-center">
            <DropDownButton initialContent={"VISA ****4394"} contentList={cardList} backgroundColor="bg-app-black-button" />
          </div>
          <div className="text-sm text-gray-500 underline">
            Want to add card?
          </div>
        </div>
      </div> 
    </div>
    <div className="flex flex-col mt-[35px]">
      <div className="text-lg font-semiboldbold">
        Input Deposit Amount: 
      </div>
      <div className="flex flex-col w-full gap-10 mt-4 md:flex-row">
        <div className="flex flex-col w-full gap-3 md:w-1/2">
          <div className="flex flex-row items-center justify-between w-full h-16 px-8 rounded-md bg-app-black-button">
            <input className="w-full placeholder:text-gray-500 bg-app-black-button" placeholder="100,000,000"/>
            <div className="text-base font-medium">
              USD
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-sm text-normal">
              $999,200 Total Received
            </div>
            <div className="text-sm text-gray-500 text-normal">
              $200, 2% transaction fee
            </div>
          </div>
        </div>
        <div className="flex w-full 1xs:w-1/2">
          <Button title={"Confirm"} selected={true} buttonStyle=" w-[520px] h-16 " fontStyle=" text-base font-medium" 
                  onClick={()=>{context.setBuyCryptoState(4)}}/>
        </div>
      </div>
      
    </div>
  </div>
 )
};



export default BankCard;