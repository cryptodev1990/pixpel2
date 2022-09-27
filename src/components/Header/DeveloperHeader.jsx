import React, { useState } from "react";
import Notification from "./Notification";
import notification from "../../asssets/images/notification.svg";
import wallet from "../../asssets/images/wallet-header.svg";
import profile from "../../asssets/images/profile.svg";
import logo from "../../asssets/images/logo.svg";
import Iconmenu from "../../asssets/images/menu.svg";

import { useNavigate } from "react-router-dom";

const DeveloperHeader = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
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
          <div
            className="hover:text-app-blue cursor-pointer"
            onClick={() => navigate("/developer")}
          >
            Games
          </div>
          <div
            className="hover:text-app-blue cursor-pointer"
            onClick={() => navigate("/mycollection")}
          >
            NFT
          </div>
          <div
            className="hover:text-app-blue cursor-pointer"
            onClick={() => navigate("/tokenroom")}
          >
            Token
          </div>
          <div
            className="hover:text-app-blue cursor-pointer"
            onClick={() => navigate("/stakingportfolio")}
          >
            Staking
          </div>
        </div>
      </div>
      <div className="hidden lg:flex bg-app-black-button px-8 py-3 rounded-md text-app-blue w-max cursor-pointer">
        Developer
      </div>
      <div className="hidden xl:flex gap-5 items-center">
        <Notification />
        <img
          src={wallet}
          alt="wallet"
          className="cursor-pointer"
          onClick={() => navigate("/developerwallet")}
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
              navigate("/developer");
            }}
          >
            Games
          </div>
          <div
            onClick={() => {
              setOpenMenu(false);
              navigate("/mycollection");
            }}
          >
            NFT
          </div>
          <div
            onClick={() => {
              setOpenMenu(false);
              navigate("/tokenroom");
            }}
          >
            Token
          </div>
          <div
            className="w-max"
            onClick={() => {
              setOpenMenu(false);
              navigate("/stakingportfolio");
            }}
          >
            Staking
          </div>
          <div className="flex gap-3">
            <img
              src={notification}
              alt="notification"
              onClick={() => {
                setOpenMenu(false);
                navigate("/notification");
              }}
            />
            <img
              src={wallet}
              alt="wallet"
              onClick={() => {
                setOpenMenu(false);
                navigate("/developerwallet");
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

export default DeveloperHeader;
