import React from 'react';
import Upbutton from "../../../asssets/images/Upbutton.svg"
import Downbutton from "../../../asssets/images/Downbutton.svg"
import { Button } from '../../../components';

const PaymentMethod = () => {
  return(
    <div className='flex flex-col w-full px-8 py-8 rounded-md bg-app-black'>
      <div className="mb-3">
        PAYMENT METHOD
      </div>
      <div className="w-2/3 px-10 py-3 mb-20 rounded-md bg-app-black-button">
        HSBC
      </div>
      <div className='flex flex-col gap-5 w-max mb-7'>
        <div className="px-3 py-3 text-sm rounded-md bg-app-black-button">
          How was your trading experience?
        </div>
        <div className="flex flex-row justify-center gap-2">
          <img src={Upbutton} alt={""}/>
          <img src={Downbutton} alt={""}/>
        </div>
      </div>
      <div className="flex flex-col w-11/12 gap-5">
        <div className='w-full rounded-md h-60 bg-app-black-button'>
          <textarea className='w-full h-full px-4 py-4 text-lg rounded-md md-rounded bg-app-black-button placeholder:text-gray-500'
                    placeholder='Write message here'/>
        </div>
        <div className='flex justify-end'>
          <Button title={"Send"} buttonStyle={"w-32  h-16"} selected={true}/>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;