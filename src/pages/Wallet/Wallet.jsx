import React from "react";
import { Header } from "../../components";
import ProfileButton from "../../components/Button/ProfileButton";
import { menuList } from "./dataList";
// import Overview from "../../components/Wallet/Overview";
import BuyCrypto from "../../components/Wallet/BuyCrypto";

const Wallet = () => {
  const [menuButtonIndex, setMenuButtonIndex] = React.useState(0);
  const handleClick = (idx) => () => {
    setMenuButtonIndex(idx);
  };
  return (
    <>
      <Header />
      <div className="flex xl:flex-row flex-col px-14 w-full min-h-screen gap-8 pb-80">
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
					{/* <Overview /> */}
					<BuyCrypto />
				</div>
      </div>
    </>
  );
};
export default Wallet;
