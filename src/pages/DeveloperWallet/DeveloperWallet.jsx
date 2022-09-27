import React, { useState, useEffect } from "react";
import ProfileButton from "../../components/Button/ProfileButton";
import { menuList } from "./dataList";
import DeveloperOverview from "../../components/Wallet/DeveloperOverview";
import DeveloperStartAccount from "../../components/Wallet/DeveloperStartAccount";
import DeveloperStakingAccount from "../../components/Wallet/DeveloperStakingAccount";
import DeveloperGameAccount from "../../components/Wallet/DeveloperGameAccount";
import TransactionHistory from "../../components/Wallet/TransactionHistory";
import { useAppContext } from "../../contexts/AppContext";

const DeveloperWallet = () => {
  const [tempComponent, setTempComponent] = useState(<DeveloperOverview />);
  const context = useAppContext();

  useEffect(() => {
    switch (context.selectedDevWalletIndex) {
      case -1:
        setTempComponent(<TransactionHistory />);
        break;
      case 0:
        setTempComponent(<DeveloperOverview />);
        break;
      case 1:
        setTempComponent(<DeveloperStartAccount />);
        break;
      case 2:
        setTempComponent();
        break;
      case 3:
        setTempComponent(<DeveloperGameAccount />);
        break;
      case 4:
        setTempComponent(<DeveloperStakingAccount />);
        break;
      default:
        break;
    }
  }, [context.selectedDevWalletIndex]);

  const handleClick = (idx) => async () => {
    await context.setSelectedDevWalletIndex(idx);
  };
  return (
    <>
      <div className="flex xl:flex-row flex-col xl:px-32 xs:px-10 px-2 w-full min-h-screen gap-8 xl:pb-40 pb-20">
        <div className="flex flex-col xl:w-1/5 w-full bg-app-black h-max rounded-xl px-4 py-8 gap-2 xl:text-base">
          {menuList.map((menu, idx) => {
            return (
              <ProfileButton
                key={idx}
                title={menu.title}
                idx={idx}
                selected={context.selectedDevWalletIndex === idx}
                handleClick={handleClick(idx)}
              />
            );
          })}
        </div>
        <div className="flex flex-col xl:w-4/5 x-full">{tempComponent}</div>
      </div>
    </>
  );
};

export default DeveloperWallet;
