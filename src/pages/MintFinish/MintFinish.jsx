import React, { useState } from "react";
import Image from "../../asssets/images/market/inventory.png";
import NFTDetail from "../../components/Developer/NFTDetail";
import NFTDetailWithIcon from "../../components/Developer/NFTDetailWithIcon";
import image from "../../asssets/images/UserHome/avax.png";
import EveryDetail from "../../components/Developer/EveryDetail";
import { Listing, Offers } from "./dataList";
import ListNFTModal from "../../components/Modal/NFTModal/ListNFTModal";
import WrapNFTModal from "../../components/Modal/NFTModal/WrapNFTModal";
import FixPriceModal from "../../components/Modal/NFTModal/FixPriceModal";

const MintFinish = () => {
  const [showListNFTModal, setShowListNFTModal] = useState(false);
  const [showWrapNFTModal, setShowWrapNFTModal] = useState(false);
  const [showFixPriceModal, setShowFixPriceModal] = useState(false);
  return (
    <>
      <div className="flex flex-col px-28 py-10">
        <div className="flex gap-12 justify-between mb-20">
          <div className="flex w-1/2">
            <img src={Image} alt="NFT" className="w-full" />
          </div>
          <div className="flex flex-col w-1/2 gap-8">
            <div className="flex justify-between px-10 py-6 rounded-xl bg-app-black">
              <div className="text-lg">Name</div>
              <div className="text-app-blue text-lg">Archer</div>
            </div>
            <div className="flex justify-between px-10 py-6 rounded-xl bg-app-black">
              <div className="text-lg">Collection</div>
              <div className="text-app-blue text-lg">The Warrior</div>
            </div>
            <div className="flex justify-between px-10 py-6 rounded-xl bg-app-black">
              <div className="text-lg">Total Supply</div>
              <div className="text-app-blue text-lg">800</div>
            </div>
            <div className="flex justify-between gap-5">
              <div
                className="bg-app-green flex justify-center items-center py-7 cursor-pointer rounded-xl text-lg w-1/3"
                onClick={() => setShowListNFTModal(true)}
              >
                Open Auction
              </div>
              <div
                className="bg-app-blue flex justify-center items-center py-7 cursor-pointer rounded-xl text-lg w-1/3"
                onClick={() => setShowWrapNFTModal(true)}
              >
                Mystery Box
              </div>
              <div
                className="bg-app-red flex justify-center items-center py-7 cursor-pointer rounded-xl text-lg w-1/3"
                onClick={() => setShowFixPriceModal(true)}
              >
                Fix Price
              </div>
            </div>
            <div className="flex gap-5">
              <NFTDetail title="QTY:" content="500" />
              <NFTDetail title="QTY:" content="200" />
              <NFTDetail title="QTY:" content="100" />
            </div>
            <div className="flex gap-5">
              <NFTDetailWithIcon
                title="Price:"
                image={image}
                content="472 249"
              />
              <NFTDetail
                title="Duration:"
                content="500"
                color="text-gray-500"
              />
              <NFTDetailWithIcon
                title="Price:"
                image={image}
                content="200 PIXP"
              />
            </div>
            <div className="flex gap-5">
              <NFTDetail
                title="Duration:"
                content="500"
                color="text-gray-500"
              />
              <div className="w-1/3" />
              <NFTDetail
                title="Duration:"
                content="500"
                color="text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div className="flex flex-col bg-app-black rounded-xl w-1/2 items-center py-10">
            <div className="text-2xl mb-8">Details</div>
            <div className="flex flex-col gap-5 w-full px-10">
              <EveryDetail type="Contract address:" content="9324n12d91bas" />
              <EveryDetail type="Token ID:" content="234nd29dn0smlsmxn3n" />
              <EveryDetail type="Token Standard:" content="BEP-2U" />
              <EveryDetail type="Blockchain:" content="Binance" />
              <EveryDetail type="Creator Fee:" content="5%" />
            </div>
          </div>
          <div className="flex flex-col gap-8 w-1/2">
            <div className="flex flex-col rounded-lg py-10 px-10 items-center justify-center bg-app-black">
              <div className="text-2xl">Listing</div>
              <div className="overflow-auto relative mt-10 w-full">
                <table className="table-auto">
                  <thead>
                    <tr>
                      <td className="text-gray-400 px-6">Price</td>
                      <td className="text-gray-400 px-6">USD</td>
                      <td className="text-gray-400 px-6">Type</td>
                      <td className="text-gray-400 w-1/5 px-6">Date</td>
                    </tr>
                  </thead>
                  <tbody className="px-4">
                    {Listing.map((menu, idx) => {
                      return (
                        <tr
                          key={idx}
                          className={
                            idx !== Listing.length - 1
                              ? "border-b-2 border-app-black"
                              : ""
                          }
                        >
                          <td className="py-5 px-6">{menu.Price}</td>
                          <td className="py-5 px-6">{menu.USD}</td>
                          <td className="py-5 px-6">{menu.Type}</td>
                          <td className="py-5 px-6">{menu.Date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col rounded-lg py-10 px-10 items-center justify-center bg-app-black">
              <div className="text-2xl">Offers</div>
              <div className="overflow-auto relative mt-10 w-full">
                <table className="table-auto">
                  <thead>
                    <tr>
                      <td className="text-gray-400 px-6">Price</td>
                      <td className="text-gray-400 px-6">USER</td>
                      <td className="text-gray-400 px-6">Type</td>
                      <td className="text-gray-400 w-1/5 px-6">Date</td>
                    </tr>
                  </thead>
                  <tbody className="px-4">
                    {Offers.map((menu, idx) => {
                      return (
                        <tr
                          key={idx}
                          className={
                            idx !== Offers.length - 1
                              ? "border-b-2 border-app-black"
                              : ""
                          }
                        >
                          <td className="py-5 px-6">{menu.Price}</td>
                          <td className="py-5 px-6">{menu.USER}</td>
                          <td className="py-5 px-6">{menu.Type}</td>
                          <td className="py-5 px-6">{menu.Date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        <ListNFTModal
          showModal={showListNFTModal}
          setShowModal={setShowListNFTModal}
        />
      }
      {
        <WrapNFTModal
          showModal={showWrapNFTModal}
          setShowModal={setShowWrapNFTModal}
        />
      }
      {
        <FixPriceModal
          showModal={showFixPriceModal}
          setShowModal={setShowFixPriceModal}
        />
      }
    </>
  );
};

export default MintFinish;
