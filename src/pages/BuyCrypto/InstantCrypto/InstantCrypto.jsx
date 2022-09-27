import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import TokenDropdownInput from "../../../components/DropDown/TokenDropdownInput";
import InstantCryptoModal from "./InstantCryptoModal";
const buttonList = [
  {
    id: 1,
    title: "Buy",
    buttonStyle: "w-full h-14",
  },
  {
    id: 2,
    title: "Sell",
    buttonStyle: "w-full h-14",
  },
];

const tokenListOne = [
  {
    id: 1,
    title: "USD",
    url: "../../assets/images/UserHome/usdc.png",
  },
  {
    id: 2,
    title: "USD",
    url: "../../assets/images/UserHome/usdc.png",
  },
  {
    id: 3,
    title: "USD",
    url: "../../assets/images/UserHome/usdc.png",
  },
];

const tokenListTwo = [
  {
    id: 1,
    title: "AVA",
    url: "../../assets/images/UserHome/avax.png",
  },
  {
    id: 2,
    title: "AVA",
    url: "../../assets/images/UserHome/avax.png",
  },
  {
    id: 3,
    title: "AVA",
    url: "../../assets/images/UserHome/avax.png",
  },
];

function InstantCrypto() {
  const [buttonState, setButtonState] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const handleClick = (buttonId) => {
    setButtonState(buttonId);
  };
  const handleClickContinue = () => {
    setShowModal(true);
  };
  return (
    <div className="flex flex-col items-center w-full sm:w-[500px] sm:px-0 xs:px-[50px] 1xs:px-[40px] 2xs:px-[30px] px-[20px]">
      <div className="my-16 text-2xl font-medium">Instant Crypto</div>
      <div className="flex flex-col w-full gap-5 mb-16 xs:flex-row">
        {buttonList.map((button, idx) => {
          return (
            <div key={idx} className="w-full">
              <Button
                title={button.title}
                selected={buttonState === button.id}
                buttonStyle={button.buttonStyle}
                fontStyle={"text-xl font-semibold"}
                onClick={() => {
                  handleClick(button.id);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between w-full mb-3">
        <div className="text-lg font-semibold">Spend:</div>
        <div className="flex flex-col 1xs:flex-row">
          <div className="text-xs font-normal 2xs:text-base text-slate-400">
            Fiat Balance:
          </div>
          <div className="text-xs font-normal 2xs:text-base text-slate-400">
            233,319,129.9022
          </div>
        </div>
      </div>

      <TokenDropdownInput
        initialContent={tokenListOne[0]}
        contentList={tokenListOne}
        backgroundColor="bg-app-black"
      />

      <div className="flex flex-row w-full mt-8 mb-3">
        <div className="text-lg font-semibold">Receive:</div>
      </div>

      <TokenDropdownInput
        initialContent={tokenListTwo[0]}
        contentList={tokenListTwo}
        backgroundColor="bg-app-black"
      />

      <div className="w-full mt-10">
        <Button
          title={"CONTINUE"}
          selected={true}
          buttonStyle={"w-full h-16"}
          fontStyle={"text-lg font-semibold"}
          onClick={handleClickContinue}
        />
      </div>

      <InstantCryptoModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default InstantCrypto;
