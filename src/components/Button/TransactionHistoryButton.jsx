import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionHistoryButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-app-black-button rounded-md px-5 h-max py-3 hover:bg-app-blue cursor-pointer" onClick={() => navigate('/wallet/history')}>
      TRANSACTION HISTORY
    </div>
  );
};

export default TransactionHistoryButton;
