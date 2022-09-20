import React from "react";
import Facebook from "../../asssets/images/facebook.svg";
import Twitter from "../../asssets/images/twitter.svg";
import Telegram from "../../asssets/images/telegram.svg";
import Discord from "../../asssets/images/discord.svg";
import Linkedin from "../../asssets/images/linkedin.svg";

const Footer = () => {
  return (
    <div className="flex flex-col bg-app-black px-20 pt-16 pb-8">
      <div className="header__logo cursor-pointer mb-12">
        <img src="assets/images/logo.svg" className="logo" alt="" />
      </div>
      <div className="flex mb-20">
        <div className="flex flex-col w-1/6">
          <div className="text-2xl font-semibold mb-6">About Us</div>
          <div className="flex flex-col gap-3">
            <div>Contact Us</div>
            <div>Copyright</div>
          </div>
        </div>
        <div className="flex flex-col w-1/6">
          <div className="text-2xl font-semibold mb-6">Products</div>
          <div className="flex flex-col gap-3">
            <div>NFT</div>
            <div>Token</div>
            <div>Buy Crypto</div>
          </div>
        </div>
        <div className="flex flex-col w-1/6">
          <div className="text-2xl font-semibold mb-6">Service</div>
          <div className="flex flex-col gap-3">
            <div>Staking</div>
            <div>Trade</div>
          </div>
        </div>
        <div className="flex flex-col w-1/6">
          <div className="text-2xl font-semibold mb-6">Support</div>
          <div className="flex flex-col gap-3">
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
          </div>
        </div>
        <div className="w-1/6"></div>
        <div className="flex flex-col w-1/6">
          <div className="text-2xl font-semibold mb-6">Community</div>
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
