import React from "react";
import { Header } from "../../components";
import ProfileButton from "../../components/Button/ProfileButton";
import { menuList } from "./dataList";
import Overview from "../../components/Wallet/Overview";
import StartAccount from "../../components/Wallet/StartAccount";
import StakingAccount from "../../components/Wallet/StakingAccount";
import TradeAccount from "../../components/Wallet/TradeAccount";
import GameAccount from "../../components/Wallet/GameAccount";
import PaymentMethod from "../../components/Wallet/PaymentMethod";
import NFTAccount from "../../components/Wallet/NFTAccount";

const Wallet = () => {
  const [tempComponent, setTempComponent] = React.useState(<Overview />);
  const [menuButtonIndex, setMenuButtonIndex] = React.useState(0);

  const handleClick = (idx) => () => {
    setMenuButtonIndex(idx);
    switch (idx) {
      case 0:
        setTempComponent(<Overview />);
        break;
      case 1:
        setTempComponent(<PaymentMethod />);
        break;
      case 2:
        setTempComponent(<StartAccount />);
        break;
      case 3:
        setTempComponent(<GameAccount />);
        break;
      case 4:
        setTempComponent(<TradeAccount />);
        break;
      case 5:
        setTempComponent(<NFTAccount />);
        break;
      case 6:
        setTempComponent(<StakingAccount />);
        break;
      default:
        break;
    }
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
        <div className="flex flex-col xl:w-4/5 x-full">{tempComponent}</div>
      </div>
    </>
  );
};

export default Wallet;
