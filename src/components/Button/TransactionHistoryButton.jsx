import React from "react";
import { useAppContext } from "../../contexts/AppContext";

const TransactionHistoryButton = () => {
  const context = useAppContext();

  return (
    <div className="flex bg-app-black-button rounded-md px-5 h-max py-3 hover:bg-app-blue cursor-pointer" onClick={() => context.setSelectedIndex(-1)}>
      TRANSACTION HISTORY
    </div>
  );
};

export default TransactionHistoryButton;
