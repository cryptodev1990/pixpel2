import React, { useState } from 'react';
import Market from './Market';
import LiquidityCard from './LiquidityCard';
import Limit from './Limit';
import Button from '../../components/Button/Button';

const buttonList = [
  {
    id: 1,
    title: "Market",
    buttonStyle: "w-33 h-14"
  },
  {
    id: 2,
    title: "Limit",
    buttonStyle: "w-26 h-14"
  },
  {
    id: 3,
    title: "Liquidity",
    buttonStyle: "w-36 h-14"
  },
]

function SwapMaster() {

  const [selectedButtonId, setSelectedButtonId] = useState(1);
  const [temp, setTemp] = useState(<Market/>)

  const handleClick = (buttonId) => {
    setSelectedButtonId(buttonId);
    switch(buttonId) {
      case 1:
        setTemp(<Market/>);
        break;
      case 2:
        setTemp(<Limit/>);
        break;
      case 3:
        setTemp(<LiquidityCard/>);
        break;
      default:
    }
  }
  
  return (
    <>
      <div className="flex flex-col py-12 justify" style={{fontFamily:"Poppins"}}>
        <div className="mb-5 w-66 h-15" style={{fontSize:"40px"}}>
          Swap Master
        </div>
        <div className="flex flex-row justify-between gap-5 mb-12 text-lg font-semibold g-5">
          {
						buttonList.map( (button, idx) => {
              return(
                <Button key={idx} title={button.title}  onClick={() => {handleClick(button.id)}} 
                        buttonStyle={button.buttonStyle} selected={selectedButtonId === button.id}/>
              )
            })
					}
        </div>
        {temp}
      </div>
    </>
  )
}

export default SwapMaster;