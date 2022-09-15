import React, {useState} from 'react';
import TokenDropdownInput from "../../components/DropDown/TokenDropdownInput";
import LiquidityModal from './LiquidityModal';

const fromTokenList = [
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

const toTokenList = [
  {
    id: 1,
    title: "PIXP",
    url: "../../assets/images/UserHome/bnb.png",
  },
  {
    id: 2,
    title: "PIXP",
    url: "../../assets/images/UserHome/bnb.png",
  },
  {
    id: 3,
    title: "PIXP",
    url: "../../assets/images/UserHome/bnb.png",
  },
];

const LiquidityCard = () => {
  const [convert, setConvert] = useState(false);
  const handleConvert = () => {
    setConvert(!convert);
  };
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  }
  return(
    <>
      <div className="flex flex-col px-6 py-6 md:py-12 md:px-12 bg-app-black rounded-xl 2xs:px-8 2xs:py-8">
        <div className="flex justify-center">
          <div className="text-xl font-semibold">
            Add liquidity
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="text-sm font-medium text-slate-500">
            Add liquidity to recieve LP token
          </div>
        </div>
        <div className="flex flex-col px-4 py-4 mt-6 mb-8 2xs:py-8 2xs:px-8 1xs:py-12 1xs:px-12 sm:py-8 sm:px-16 rounded-xl bg-app-black-button">
          <div className="flex justify-center mb-4">
            <div className="text-base font-semibold">
              You are the first liquidity provider.
            </div>
          </div>
          <div className="flex justify-center mb-3">
            <div className="text-sm font-normal text-slate-500">
              The ratio of tokens you add will set the price of this pool
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-sm font-normal text-slate-500">
              Once you are happy with the rate clock supply to review
            </div>
          </div>
        </div>
        <TokenDropdownInput
          initialContent={convert ? toTokenList[0] : fromTokenList[0]}
          contentList={convert ? toTokenList : fromTokenList}
          Max={false}
        />
        <div className="flex flex-row justify-end mt-1 text-sm">
          <div className="font-normal text-gray-400">
            Balance: 233,319,129.9022
          </div>
        </div>
        <div className="flex justify-center w-full mb-5">
          <div
            className="flex items-center justify-center rounded-full cursor-pointer full bg-app-black-button"
            style={{ marginBottom: "10px", width: "53px", height: "53px" }}
            onClick={handleConvert}
          >
            <svg
              className="w-10 h-10 text-white-800"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="15 4 19 4 19 8" />
              <line x1="14.75" y1="9.25" x2="19" y2="4" />
              <line x1="5" y1="19" x2="9" y2="15" />
              <polyline points="15 19 19 19 19 15" />
              <line x1="5" y1="5" x2="19" y2="19" />
            </svg>
          </div>
        </div>
        <TokenDropdownInput
          initialContent={convert ? fromTokenList[0] : toTokenList[0]}
          contentList={convert ? fromTokenList : toTokenList}
          Max={false}
        />
        <div className="flex flex-row justify-end mt-1 text-sm">
          <div className="font-normal text-gray-400">
            Balance: 233,319,129.9022
          </div>
        </div>
        <div className="flex flex-col py-4 mt-6 mb-8 xs:py-8 rounded-xl bg-app-black-button">
          <div className="flex justify-center pb-5 mb-4 border-b-2 border-gray-500">
            <div className="text-xs font-medium 2xs:text-base">
              Initial prices and pool share
            </div>
          </div>
          <div className="flex flex-col text-lg font-medium 2xs:text-xs 2xs:justify-around 2xs:flex-row 1xs:text-base">
            <div className="flex flex-col items-center">
              <div className="flex flex-row justify-center">
                <div>193.095</div>
              </div>
              <div>PIXP per BNB</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row justify-center">
                <div>193.095</div>
              </div>
              <div>PIXP per BNB</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row justify-center">
                <div>193.095</div>
              </div>
              <div>PIXP per BNB</div>
            </div>    
          </div>
        </div>
        <div className="flex items-center justify-center h-16 rounded-md cursor-pointer h-18 bg-app-blue hover:bg-app-blue"
            onClick={handleModal}>
          <div className="text-lg">
            confirm
          </div>
        </div>
      </div>
      <LiquidityModal showModal={showModal} setShowModal={setShowModal}/>
    </>
    
  )
};

export default LiquidityCard;