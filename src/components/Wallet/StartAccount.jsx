import React, { useState } from "react";
import StartAccountOverview from "./StartAccount/StartAccountOverview";
import TokenButton from "../Button/TokenButton";
import { tokenList, tokencoinList, fiatList } from "./dataList";
import { useAppContext } from "../../contexts/AppContext";
import CoinTable from "./StartAccount/CoinTable";
import WithdrawModal from "./Modal/WithdrawModal";
import TransferModal from "./Modal/TransferModal";
import { useNavigate } from "react-router-dom";

const StartAccount = () => {
  const context = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [selectedType, setSelectedType] = useState(1);
  const navigate = useNavigate();
  const handleFiatClick = (idx) => async () => {
    switch (idx) {
      case 0:
        context.setSelectedIndex(1);
        break;
      case 1:
        setShowModal(true);
        break;
      default:
        break;
    }
  };
  const handleTokenCoinClick = (idx) => async () => {
    switch(idx) {
      case 1:
        navigate("/withdraw");
        break;
      case 3:
        setShowTransferModal(true);
        break;
      case 4:
        navigate("/swap-master");
        break;
      default:
        break;
    }
  }
  const handleClick = (idx) => () => {
    setSelectedType(idx);
  };

  return (
    <>
      <div className="flex flex-col">
        <StartAccountOverview selected={selectedType} />
        <div className="flex gap-4 mt-6 mb-3">
          {tokenList.map((menu, idx) => {
            return (
              <TokenButton
                key={idx}
                idx={idx}
                title={menu.title}
                selected={selectedType === idx}
                handleClick={handleClick(idx)}
              />
            );
          })}
        </div>
        <div className="flex gap-4 mt-6 mb-5">
          {selectedType === 0
            ? fiatList.map((menu, idx) => {
                return (
                  <TokenButton
                    key={idx}
                    title={menu.title}
                    handleClick={handleFiatClick(idx)}
                  />
                );
              })
            : tokencoinList.map((menu, idx) => {
                return <TokenButton key={idx} title={menu.title} handleClick={handleTokenCoinClick(idx)} />;
              })}
        </div>
        <CoinTable idx={selectedType} />
      </div>
      {<WithdrawModal showModal={showModal} setShowModal={setShowModal} />}
      {<TransferModal showModal={showTransferModal} setShowModal={setShowTransferModal}/>}
    </>
  );
};

export default StartAccount;
