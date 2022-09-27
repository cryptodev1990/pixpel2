import React, { useState } from "react";
import DeveloperGamingAccountOverview from "./GamingAccount/DeveloperGamingAccountOverview";
import TokenButton from "../Button/TokenButton";
import GamingTable from "./GamingAccount/GamingTable";
import { useAppContext } from "../../contexts/AppContext";
import TransferModal from "./Modal/TransferModal";
import WithdrawModal from "./Modal/WithdrawModal";

const DeveloperGameAccount = () => {
  const [selected, setSelected] = useState(0);
  const context = useAppContext();
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  const handleClick = (idx) => () => {
    setSelected(idx);
    switch (idx) {
      case 0:
        context.setSelectedIndex(1);
        break;
      case 1:
        setShowWithdrawModal(true);
        break;
      case 2:
        setShowTransferModal(true);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div>
        <DeveloperGamingAccountOverview />
        <div className="flex mt-4 mb-8 gap-4 flex-col 2xs:flex-row">
          <TokenButton
            title="DEPOSIT"
            selected={selected === 0}
            handleClick={handleClick(0)}
          />
          <TokenButton
            title="WITHDRAW"
            selected={selected === 1}
            handleClick={handleClick(1)}
          />
          <TokenButton
            title="TRANSFER"
            selected={selected === 2}
            handleClick={handleClick(2)}
          />
        </div>
        <GamingTable />
      </div>
      {
        <WithdrawModal
          showModal={showWithdrawModal}
          setShowModal={setShowWithdrawModal}
        />
      }
      {
        <TransferModal
          showModal={showTransferModal}
          setShowModal={setShowTransferModal}
        />
      }
    </>
  );
};

export default DeveloperGameAccount;
