import React, { useState } from "react";
import CheckboxDropDown from "../../components/DropDown/CheckboxDropDown";
import NFTCard from "../../components/Market/NFTCard/NFTCard";
import Cart from "../../components/Cart/Cart";
import GameSlider from "../../components/Market/GameSlider";
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
    <div className="flex flex-col pb-40 px-36">
      <div className="text-4xl mb-6 font-medium">NFT Marketplace</div>

      <div
        className={
          (cartClicked ? "w-4/5 " : "w-full ") + "flex justify-between mb-7"
        }
      >
        <div className="flex gap-3">
          <div className="flex items-center gap-3 px-7 w-75 py-4 h-15 bg-app-black rounded-md">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="11" cy="11" r="8" />{" "}
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input className=" bg-app-black" placeholder="Search..." />
          </div>
          <div
            className={
              (cartClicked ? "w-36 " : "w-41 ") +
              "flex bg-app-black gap-2 rounded-md items-center h-15 justify-center cursor-pointer active:bg-app-black-light"
            }
            onClick={handleGameClick}
          >
            <img src={game} alt="Game" />
            <div>GAMES</div>
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
            "bg-app-black rounded-md gap-2 flex justify-center items-center w-33 h-15 cursor-pointer"
          }
          onClick={handleCartClick}
        >
          <img src={cart} alt="cart" />
          <div>CART</div>
        </div>
      </div>
      <div className="flex">
        <div className={cartClicked ? "w-4/5" : "w-full"}>
          <div className={(gameClicked ? "" : "hidden") + " mb-8"}>
            <GameSlider number={cartClicked ? 5 : 7} />
          </div>
          <div
            className={
              (cartClicked ? "grid-cols-5" : "grid-cols-7") + " grid gap-3"
            }
          >
            {NFTCardList.map((nft, idx) => {
              return <NFTCard key={idx} image={nft.img} data={nft} />;
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
