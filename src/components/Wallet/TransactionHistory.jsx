import React from "react";
import TokenButton from "../Button/TokenButton";
import { transactionButtonList, transactionList } from "./dataList";

const TransactionHistory = () => {
  const [buttonSelected, setButtonSelected] = React.useState(0);
  const handleClick = (idx) => () => {
    setButtonSelected(idx);
  }
  return (
    <div className="flex flex-col">
      <div className="text-3xl mb-6 font-semibold">Transaction History</div>
      <div className="flex gap-4">
        {
          transactionButtonList.map((menu, idx) => {
            return (
              <TokenButton key={idx} title={menu.title} selected={buttonSelected === idx} handleClick={handleClick(idx)} />
            )
          })
        }
      </div>
    </div>
  )
}

export default TransactionHistory;