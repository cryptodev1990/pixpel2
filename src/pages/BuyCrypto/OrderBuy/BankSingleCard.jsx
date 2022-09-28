import React from 'react';
import { Button } from '../../../components';

const BankSmallCard = () => {
  return(
    <div className='flex flex-row w-full gap-4 rounded-md py-7 px-7 bg-app-black'>
      <div className='flex flex-col w-1/5 gap-2'>
              <Button title={"HSBC"} buttonStyle={"h-14 w-full xs:text-base font-semibold truncate text-sm"}
                      selected={true}/>
      </div>
      <div className='flex flex-col w-4/5 gap-2 bg-app-black'>
        <div className="flex flex-row items-center justify-between px-4 rounded-md bg-app-black-button h-14">
          <div>
            Name:
          </div>
          <div className='text-blue-500'>
            Danli
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-4 rounded-md bg-app-black-button h-14">
          <div>
            Account Number
          </div>
          <div className='text-blue-500'>
            1294289cdwc929bf92
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-4 rounded-md bg-app-black-button h-14">
          <div>
            Amout
          </div>
          <div className='text-blue-500'>
            12.41280 BTC
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-4 rounded-md bg-app-black-button h-14">
          <div>
            Sender
          </div>
          <div className='text-blue-500'>
            Cerstkom
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-4 rounded-md bg-app-black-button h-14">
          <div>
            Sender
          </div>
          <div className='text-blue-500'>
            Cerstkom
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-4 rounded-md bg-app-black-button h-14">
          <div>
            Sender
          </div>
          <div className='text-blue-500'>
            Cerstkom
          </div>
        </div>
      </div>   
    </div>
  );
}

export default BankSmallCard;