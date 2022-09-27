import React, { useState } from "react";
import Notification from "./Notification";
import Market from "./Market";
import Trade from "./Trade";
import cart from "../../asssets/images/shopping-cart.svg";
import inventory from "../../asssets/images/inventory.svg";
import wallet from "../../asssets/images/wallet-header.svg";
import profile from "../../asssets/images/profile.svg";
import logo from "../../asssets/images/logo.svg";
import notification from "../../asssets/images/notification.svg";
import { useNavigate } from "react-router-dom";
import Iconmenu from "../../asssets/images/menu.svg";

const PlayerHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-app-black flex justify-between px-8 py-5 items-center mb-11">
      <div className="flex gap-7 items-center">
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />
        <div className="hidden xl:flex gap-12 ">
          <Market />
          <div
            className="hover:text-app-blue cursor-pointer"
            onClick={() => navigate("/staking")}
          >
            Staking
          </div>
          <Trade />
          <div
            className="hover:text-app-blue cursor-pointer w-max"
            onClick={() => navigate("/buycrypto")}
          >
            Buy Crypto
          </div>
        </div>
      </div>
      <div className="hidden lg:flex bg-app-black-button px-8 py-3 rounded-md text-app-blue w-max hover:cursor-pointer">
        Player
      </div>
      <div className="hidden xl:flex gap-5 items-center">
        <img
          src={cart}
          alt="cart"
          className="cursor-pointer"
          onClick={() => navigate("/nft-market")}
        />
        <Notification />
        <img
          src={inventory}
          alt="inventory"
          className="cursor-pointer"
          onClick={() => navigate("/inventory")}
        />
        <img
          src={wallet}
          alt="wallet"
          className="cursor-pointer"
          onClick={() => navigate("/wallet")}
        />
        <img
          src={profile}
          alt="profile"
          className="cursor-pointer"
          onClick={() => navigate("/profile")}
        />
      </div>
      <div className="xl:hidden flex" onClick={() => setOpenMenu(!openMenu)}>
        <img src={Iconmenu} alt="menu" />
      </div>
      <div
        className={
          (openMenu ? "-translate-x-0" : "translate-x-full") +
          " fixed top-0 right-0 w-screen z-50 min-h-screen bg-black bg-opacity-90 transform shadow-lg shadow-white duration-200"
        }
      >
        <div
          className="h-36 flex bg-black items-center pr-10 justify-end"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <p className="text-5xl cursor-pointer text-white">×</p>
        </div>
        <div className="w-full flex justify-center flex-col items-center gap-8 pt-10">
          <div
            onClick={() => {
              setOpenMenu(false);
              navigate("/nft-market");
            }}
            className="hover:text-app-blue cursor-pointer"
          >
            NFT Market
          </div>
          <div
            onClick={() => {
              setOpenMenu(false);
              navigate("/game-market");
            }}
            className="hover:text-app-blue cursor-pointer"
          >
            Game Market
          </div>
          <div
            onClick={() => {
              setOpenMenu(false);
              navigate("/staking");
            }}
            className="hover:text-app-blue cursor-pointer"
          >
            Staking
          </div>
          <div
            onClick={() => {
              setOpenMenu(false);
              navigate("/swap-master");
            }}
            className="hover:text-app-blue cursor-pointer"
          >
            Swap
          </div>
          <div
            onClick={() => {
              setOpenMenu(false);
              navigate("/exchange");
            }}
            className="hover:text-app-blue cursor-pointer"
          >
            CEX
          </div>
          <div
            className="w-max cursor-pointer hover:text-app-blue"
            onClick={() => {
              setOpenMenu(false);
              navigate("/buycrypto");
            }}
            
          >
            Buy Crypto
          </div>
          <div className="flex gap-5">
            <img
              src={cart}
              alt="cart"
              onClick={() => {
                setOpenMenu(false);
                navigate("/nft-market");
              }}
            />
            <img
              src={notification}
              alt="notification"
              onClick={() => {
                setOpenMenu(false);
                navigate("/notification");
              }}
            />
            <img
              src={inventory}
              alt="inventory"
              onClick={() => {
                setOpenMenu(false);
                navigate("/inventory");
              }}
            />
            <img
              src={wallet}
              alt="wallet"
              onClick={() => {
                setOpenMenu(false);
                navigate("/wallet");
              }}
            />
            <img
              src={profile}
              alt="profile"
              onClick={() => {
                setOpenMenu(false);
                navigate("/profile");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerHeader;