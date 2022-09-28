import React, {useState} from "react";
import { Button } from "../../../components";
import { useAppContext } from "../../../contexts/AppContext";

export default function OrderConfirmModal(props) {
  const context = useAppContext();
	return (
		<>
			{props.showModal ? (
				<>
					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div
							className="fixed inset-0 w-full h-full bg-black opacity-40"
							onClick={() => props.setShowModal(false)}
						></div>
						<div className="flex items-center min-h-screen px-4 py-8">
							<div className="items-center relative flex flex-col mx-auto text-lg shadow-lg w-158 bg-app-black rounded-xl sm:p-[50px] xs:p-[40px] 1xs:p-[30px] 2xs:p-[20px] p-[10px]">
                <div className="flex justify-center w-full mb-8">
                  <div className='flex mb-4 border-2 border-red-500 border-dashed rounded-full' 
                       style={{width:"130px", height:"130px", paddingTop:"13px",paddingRight:"14px",paddingBottom:"14px",paddingLeft:"14px"}}>
                    <div className='flex items-center justify-center px-2 py-3 bg-red-500 rounded-full' style={{width:"100px", height:"100px"}}>
                      <div className="text-5xl font-extrabold">
                        !
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-full mb-6 text-2xl font-semibold">
                  Confirm Release
                </div>
                <div className="flex w-full mb-5 text-lg font-medium text-gray-400 1xs:w-11/12">
                  ATTENTION! Please be sure to LOG IN THE RECEIVING 
                  (e.g. Banks/eWallet) ACCOUNT to confirm that 
                  the money has arrived in the “Available Ballance”
                </div>
                <div className="flex flex-row w-full gap-2 mb-16 1xs:w-2/3">
                  <input type="Checkbox" className="bg-blue-500"/>
                  <div className="flex w-full text-sm font-medium text-gray-400">
                    I confirm that the payment is successfully
                    received with the correct amount and 
                    sender information.
                  </div>        
                </div>
                <div className="flex flex-col justify-center w-full gap-5 1xs:flex-row 1xs:w-11/12">
                  <Button title={"Cancel"} buttonStyle={"h-16 1xs:w-1/2 w-full"} onClick={() => props.setShowModal(false)}/>
                  <Button title={"Confirm Release"} buttonStyle={"h-16 1xs:w-1/2 w-full"} selected={true} onClick={() => {context.setOrderSellState(1)}}/>
                </div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
}