import React, { useState } from "react";
import CheckboxDropDown from "../../components/DropDown/CheckboxDropDown";
import NFTCard from "../../components/Market/NFTCard/NFTCard";
import Cart from "../../components/Cart/Cart";
import GameSlider from "../../components/Market/GameSlider";
import search from "../../asssets/images/search.svg";
import {
  classList,
  categoryList,
  teamsList,
  insuranceList,
  sortList,
  NFTCardList,
} from "./dataList";

import game from "../../asssets/images/game.png";
import cart from "../../asssets/images/cart.svg";

const NFTMarket = () => {
  const [cartClicked, setCartClicked] = useState(false);
  const [gameClicked, setGameClicked] = useState(false);
  const handleCartClick = () => {
    setCartClicked(!cartClicked);
  };
  const handleGameClick = () => {
    setGameClicked(!gameClicked);
  };
  return (
    <div className="flex flex-col pb-40 2xl:px-28 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8">
      <div className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg mb-6 font-medium">
        NFT Marketplace
      </div>
      <div className={(cartClicked ? "w-4/5" : "w-full") + " flex mb-7"}>
        <div className="flex gap-3 2xl1:flex-row flex-col w-full">
          <div className="flex gap-6">
            <div className="flex items-center gap-3 px-7 py-4 bg-app-black rounded-md">
              <img src={search} alt="search" />
              <input
                className="bg-app-black 2xl1:w-44"
                placeholder="Search..."
              />
            </div>
            <div
              className={
                
                "w-41 flex bg-app-black gap-2 rounded-md items-center justify-center cursor-pointer active:bg-app-black-light"
              }
              onClick={handleGameClick}
            >
              <img src={game} alt="Game" />
              <div className="text-base">GAMES</div>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex gap-3">
              <CheckboxDropDown
                initialContent={classList.title}
                contentList={classList.list}
                clicked={cartClicked}
              />
              <CheckboxDropDown
                initialContent={categoryList.title}
                clicked={cartClicked}
                contentList={categoryList.list}
              />
              <CheckboxDropDown
                initialContent={teamsList.title}
                clicked={cartClicked}
                contentList={teamsList.list}
              />
              <CheckboxDropDown
                initialContent={insuranceList.title}
                clicked={cartClicked}
                contentList={insuranceList.list}
              />
              <CheckboxDropDown
                initialContent={sortList.title}
                clicked={cartClicked}
                contentList={sortList.list}
              />
            </div>
            <div
              className={
                (cartClicked ? "border-app-blue border-2 " : "") +
                "bg-app-black rounded-md gap-2 w-28 flex justify-center items-center cursor-pointer"
              }
              onClick={handleCartClick}
            >
              <img src={cart} alt="cart" />
              <div className="text-base">CART</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <div className={cartClicked ? "w-4/5" : "w-full"}>
          <div className={(gameClicked ? "" : "hidden") + " mb-8"}>
            <GameSlider cartClicked={cartClicked} />
          </div>
          <div
            className={
              (cartClicked
                ? "grid-cols-5"
                : "3xl1:grid-cols-8 2xl1:grid-cols-7 xl1:grid-cols-6 lg1:grid-cols-5 md1:grid-cols-4 sm1:grid-cols-3 1xs:grid-cols-2 grid-cols-1") +
              " grid gap-3"
            }
          >
            {NFTCardList.map((nft, idx) => {
              return <NFTCard key={idx} data={nft} />;
            })}
          </div>
        </div>
        <div className={cartClicked ? "w-1/5" : "hidden"}>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default NFTMarket;
