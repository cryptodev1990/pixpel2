import React from 'react';
import Button from '../../../components/Button/Button'

const BankSuccessCard = () => {
	return(
      <div className="flex flex-col items-center w-11/12 1xs:pt-[50px] 1xs:pb-[65px] 2xs:pt-[35px] 2xs:pb-[45px] pt-[20px] pb-[30px] bg-app-black rounded-xl xs:w-[521px] mt-32">
        <div className='flex mb-4 border-2 border-dashed rounded-full border-emerald-500' 
             style={{width:"130px", height:"130px", paddingTop:"13px",paddingRight:"14px",paddingBottom:"14px",paddingLeft:"14px"}}>
          <div className='flex px-2 py-3 rounded-full bg-emerald-500' style={{width:"100px", height:"100px"}}>
            <svg className="w-20 h-20 text-white"  viewBox="0 0 24 24"  fill="none"  
                 stroke="currentColor"  strokeWidth="0.5"  strokeLinecap="round"  strokeLinejoin="round">  
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div className="text-2xl font-semibold">
            27.13898 USDT
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-xl font-semibold 2xs:text-2xl">
            Deposited Successfully
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-lg font-normal text-gray-500 mb-[53px]">
            In your account
          </div>
        </div>
        <Button title={"Ok"} selected={true} buttonStyle={" w-[203px] h-[67px]"} fontStyle={" text-lg font-medium "}/>
		  </div>
			
	)
}

export default BankSuccessCard;
