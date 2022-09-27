import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddBankModal from "../../components/Wallet/Modal/AddBankModal";
import SuccessMintModal from "../../components/TokenRoom/SuccessMintModal";

const Mint = () => {
  const [showBankModal, setShowBankModal] = useState(false);
  const [showMintModal, setShowMintModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="px-32 flex flex-col">
        <div className="flex justify-between items-center">
          <div
            className="flex py-3 px-3 bg-app-black-button rounded-md cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </div>
          <div className="text-4xl font-semibold">Mint</div>
          <div />
        </div>
        <div className="flex justify-between my-10">
          <div />
          <div className="flex flex-col gap-6 w-1/4">
            <div className="bg-app-black rounded-md px-5 py-5 flex justify-between">
              Supply Name:
              <div className="text-lg text-app-blue">MAIN</div>
            </div>
            <div className="bg-app-black rounded-md px-5 py-5 flex justify-between">
              Remaining Tokens
              <br />
              to be Minted:
              <div className="text-lg text-app-blue">1.000.000</div>
            </div>
          </div>
          <div />
        </div>
        <div className="bg-app-black flex py-10 px-10 mb-5">
          <div className="overflow-x-auto relative w-full">
            <table className="tablt-auto">
              <thead>
                <tr>
                  <td className="w-20 px-6"></td>
                  <td className="w-1/4 px-6">Mint Date:</td>
                  <td className="w-1/4 px-6">Mint Wallet:</td>
                  <td className="w-1/4 px-6">Wallet ID:</td>
                  <td className="w-1/4 px-6">Token Amount:</td>
                  <td className="px-6" />
                </tr>
              </thead>
              <tbody className="px-5">
                <tr>
                  <td className="py-1 px-6">
                    <div className="bg-app-blue px-8 py-4 rounded-md">1</div>
                  </td>
                  <td className="px-6">
                    <div className="bg-app-black-select rounded-md w-full py-7"></div>
                  </td>
                  <td className="px-6">
                    <div className="bg-app-black-select rounded-md w-full py-7"></div>
                  </td>
                  <td className="px-6">
                    <div className="bg-app-black-select rounded-md w-full py-7"></div>
                  </td>
                  <td className="px-6">
                    <div className="bg-app-black-select rounded-md w-full py-7"></div>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td className="py-1 px-6">
                    <div className="bg-app-blue px-8 py-4 rounded-md">2</div>
                  </td>
                  <td className="px-6">
                    <div className="bg-app-black-select rounded-md w-full py-7"></div>
                  </td>
                  <td className="px-6">
                    <div className="bg-app-black-select rounded-md w-full py-7"></div>
                  </td>
                  <td className="px-6">
                    <div className="bg-app-black-select rounded-md w-full py-7"></div>
                  </td>
                  <td className="px-6">
                    <div className="bg-app-black-select rounded-md w-full py-7"></div>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="bg-app-green mx-10 px-8 py-4 rounded-lg mb-28 w-max cursor-pointer"
          onClick={() => setShowBankModal(true)}
        >
          + ADD
        </div>
        <div className="flex justify-center">
          <div
            className="bg-app-blue rounded px-32 py-5 cursor-pointer"
            onClick={() => setShowMintModal(true)}
          >
            MINT
          </div>
        </div>
      </div>
      {
        <AddBankModal
          showModal={showBankModal}
          setShowModal={setShowBankModal}
        />
      }
      {
        <SuccessMintModal
          showModal={showMintModal}
          setShowModal={setShowMintModal}
        />
      }
    </>
  );
};

export default Mint;
