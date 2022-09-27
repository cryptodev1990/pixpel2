import React from "react";
import Facebook from "../../asssets/images/facebook.svg";
import Twitter from "../../asssets/images/twitter.svg";
import Telegram from "../../asssets/images/telegram.svg";
import Discord from "../../asssets/images/discord.svg";
import Linkedin from "../../asssets/images/linkedin.svg";

const Footer = () => {
  return (
    <div className="flex flex-col bg-app-black 2xl:px-20 xl:px-16 lg:px-12 md:px-9 sm:px-6 px-3 xl:pt-16 lg:pt-12 md:pt-9 sm:pt-6 pt-3 xl:pb-8 lg:pb-6 md:pb-4 pb-3 mt-10">
      <div className="header__logo cursor-pointer xl:mb-12 lg:mb-9 md:mb-6 sm:mb-4 mb-3">
        <img src="assets/images/logo.svg" className="logo" alt="" />
      </div>
      <div className="grid xl1:grid-cols-6 md1:grid-cols-3 2xs:grid-cols-2 grid-cols-1 2xl:mb-20 xl:mb-16 lg:mb-12 md:mb-9 sm:mb-6 mb-3 gap-10">
        <div className="flex flex-col">
          <div className="text-2xl font-semibold xl:mb-6 md:mb-4 mb-2">About Us</div>
          <div className="flex flex-col xl:gap-3 md:gap-2 gap-1">
            <div>Contact Us</div>
            <div>Copyright</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl font-semibold xl:mb-6 md:mb-4 mb-2">Products</div>
          <div className="flex flex-col xl:gap-3 md:gap-2 gap-1">
            <div>NFT</div>
            <div>Token</div>
            <div>Buy Crypto</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl font-semibold xl:mb-6 md:mb-4 mb-2">Service</div>
          <div className="flex flex-col xl:gap-3 md:gap-2 gap-1">
            <div>Staking</div>
            <div>Trade</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl font-semibold xl:mb-6 md:mb-4 mb-2">Support</div>
          <div className="flex flex-col xl:gap-3 md:gap-2 gap-1">
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
          </div>
        </div>
        <div className="hidden xl:flex w-1/6"></div>
        <div className="flex flex-col">
          <div className="text-2xl font-semibold xl:mb-6 md:mb-4 mb-2">Community</div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-9">
              <img src={Facebook} alt="facebook" className="w-7 rounded-full" />
              <img src={Twitter} alt="twitter" className="w-7 rounded-full" />
              <img src={Telegram} alt="telegram" className="w-7 rounded-full" />
            </div>
            <div className="flex gap-9">
              <img src={Discord} alt="discord" className="w-7 rounded-full" />
              <img src={Linkedin} alt="linkedin" className="w-7 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-t-2 border-app-black justify-center items-center gap-2">
        <div className="flex mt-5 gap-2"> 
          <div className="text-xl">PIXPEL</div>
          <svg
            className="w-5 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" />{" "}
            <path d="M14.5 9a3.5 4 0 1 0 0 6" />
          </svg>
          <div className="text-xl">2022</div>
        </div>
        <div className="text-gray-400 text-base">By Pixpel Trading S.A. de C.V.</div>
      </div>
    </div>
  );
};

export default Footer;
