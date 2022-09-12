import React from "react";
import { Header } from "../../components";
import ProfileButton from "../../components/Button/ProfileButton";
import { menuList } from "./dataList";
import Overview from "../../components/Wallet/Overview";
import BuyCrypto from "../../components/Wallet/BuyCrypto";
import StartAccount from "../../components/Wallet/StartAccount";
import StakingAccount from "../../components/Wallet/StakingAccount";
import TransactionHistory from "../../components/Wallet/TransactionHistory";

const Wallet = () => {
  const [menuButtonIndex, setMenuButtonIndex] = React.useState(0);
  const handleClick = (idx) => () => {
    setMenuButtonIndex(idx);
  };
  return (
    <>
      <Header />
      <div className="flex xl:flex-row flex-col xl:px-32 md:px-6 w-full min-h-screen gap-8 xl:pb-80 pb-32">
        <div className="flex flex-col xl:w-1/5 w-full bg-app-black h-max rounded-xl px-4 py-8 gap-2 xl:text-base">
          {menuList.map((menu, idx) => {
            return (
              <ProfileButton
                key={idx}
                title={menu.title}
                idx={idx}
                selected={menuButtonIndex === idx}
                handleClick={handleClick(idx)}
              />
            );
          })}
        </div>
        <div className="flex flex-col xl:w-4/5 x-full">
          {/* <StartAccount /> */}
          {/* <Overview /> */}
          {/* <BuyCrypto /> */}
          {/* <StakingAccount /> */}
          <TransactionHistory />
        </div>
      </div>
    </>
  );
};
export default Wallet;
