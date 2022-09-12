import React, { useState } from 'react';
import MarketCard from './MarketCard';
import LiquidityCard from './LiquidityCard';
import GraphCard from './GraphCard';
import LimitCard from './LimitCard';
import Button from './Button';
import { useSearchParams } from 'react-router-dom';

const buttonList = [
  {
    id: 1,
    title: "Market"
  },
  {
    id: 2,
    title: "Limit",
  },
  {
    id: 3,
    title: "Liquidity",
  },
]

function SwapMaster() {
  
  const [search, setSearch] = useSearchParams();

  const [swapState, setSwapState] = useState((search.get('x') === null ? "Market" : search.get('x')));
  
  const [selected, setSelected] = useState((search.get('y') === null ? 1 : 3));

  const handleClick = (button) => {
    setSwapState(button.title);
    setSelected(button.id)
  }
  return (
    <>
      <div className="flex flex-col py-12 justify" style={{fontFamily:"Poppins"}}>
        <div className="mb-5 w-66 h-15" style={{fontSize:"40px"}}>
          Swap Master
        </div>
        <div className="flex flex-row justify-between gap-5 mb-12">
          {
						buttonList.map( (button, idx) => {
              return(
                <Button key={idx} title={button.title} selected={selected === button.id} onClick={() => {handleClick(button)}}/>
              )
            })
					}
        </div>
        {swapState === "Market" ? <MarketCard/> : null}
        {swapState === "Liquidity" ? <LiquidityCard/> : null}
        {swapState === "Limit" ? 
          <div className="flex flex-col gap-8 2xl:flex-row">
            <GraphCard />
            <LimitCard />
          </div>  
          : null
        }
      </div>
    </>
  )
}

export default SwapMaster;