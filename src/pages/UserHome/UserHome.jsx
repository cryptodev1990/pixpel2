import React from "react";
import ButtonMar from "../../components/Button/ButtonMar";
import GameIntro from "../../components/Image/GameIntro";
import NFTintro from "../../components/Image/NFTintro";
import Cryptobots from "../../asssets/images/market/cryptobots.png";
import Dungeons from "../../asssets/images/market/dungeons.png";
import Cryptoadventures from "../../asssets/images/market/cryptoadventures.png";
import StakingDetail from "../../components/Image/StakingDetail";
import MarketChart from "../../components/MarketChart/MarketChart";
import { useNavigate } from "react-router-dom";

import { tokenTrend } from "./dataList";
import nft1 from "../../asssets/images/NFT/nft-1.png";
import nft2 from "../../asssets/images/NFT/nft-2.png";
import nft3 from "../../asssets/images/NFT/nft-3.png";

const sizeChart = {
  maxHeight: 51,
  maxWidth: 124,
  marginLeft: "auto",
};

const UserHome = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/nft-market");
  };

  const handlePlayClick = () => {
    navigate("/game-market");
  };

  const handleTradeClick = () => {
    navigate("/exchange");
  };

  const handleStakeClick = () => {
    navigate("/stakingportfolio");
  };

  return (
    <div className="py-28 px-32 flex flex-col">
      <div className="text-6xl font-medium mb-8">Play your favorite game</div>
      <div className="text-gray-500 text-base font-medium w-5/12 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt
        volutpat ligula sed dignissim. Cras sagittis, purus at tempor
        sollicitudin, lacus mauris accumsan erat, quis posuere leo mi sed
        lectus.
      </div>
      <ButtonMar title="Play Now" handleClick={handlePlayClick} />
      <div className="flex mt-10 mb-20">
        <GameIntro
          image={Cryptobots}
          title="CRYPTOBOTS"
          userNumber="232 321+ users"
          desription="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <GameIntro
          image={Dungeons}
          title="DUNGEONS & BOTS"
          userNumber="232 321+ users"
          desription="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <GameIntro
          image={Cryptoadventures}
          title="CRYPTO ADVENTURES"
          userNumber="232 321+ users"
          desription="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>
      <div className="flex justify-between items-end mb-10">
        <div className="text-5xl">Recent NFTs</div>
        <ButtonMar title="Buy Now" handleClick={handleBuyClick} />
      </div>
      <div className="flex justify-between mb-32">
        <NFTintro image={nft1} name="Mustang" bid="2 PIX" />
        <NFTintro image={nft2} name="Mustang" bid="2 PIX" />
        <NFTintro image={nft3} name="Mustang" bid="2 PIX" />
        <NFTintro image={nft1} name="Mustang" bid="2 PIX" />
        <NFTintro image={nft2} name="Mustang" bid="2 PIX" />
      </div>
      <div className="flex justify-between items-end mb-10">
        <div className="text-5xl">Staking</div>
        <ButtonMar title="Stake Now" handleClick={handleStakeClick} />
      </div>
      <div className="flex gap-5 justify-between mb-20">
        <StakingDetail locked={true} />
        <StakingDetail locked={false} />
        <StakingDetail locked={true} />
      </div>
      <div className="flex justify-between items-end mb-10">
        <div className="text-5xl">Token trend</div>
        <ButtonMar title="Trade Now" handleClick={handleTradeClick} />
      </div>
      <div className="overflow-x-auto relative w-full">
        <table className="table-auto">
          <thead>
            <tr>
              <td className="text-gray-500 px-6 w-1/3">Name</td>
              <td className="text-gray-500 px-6 w-1/3">Last Price</td>
              <td className="text-gray-500 px-6 w-1/4">24h Change</td>
              <td className="text-gray-500 px-6 w-1/4">Market Cap</td>
            </tr>
          </thead>
          <tbody className="px-4">
            {tokenTrend.map((token, idx) => {
              return (
                <tr key={idx}>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <img src={token.image} alt={token.symbol} />
                      <div>{token.symbol}</div>
                      <div className="text-gray-500">{token.name}</div>
                    </div>
                  </td>
                  <td className="px-6">
                    <div className="flex items-center">{token.Price}</div>
                  </td>
                  {token.Change > 0 ? (
                    <td className="px-6">
                      <div className="flex items-center text-app-green">
                        +{token.Change}%
                      </div>
                    </td>
                  ) : (
                    <td className="px-6">
                      <div className="flex items-center text-app-red">
                        {token.Change}%
                      </div>
                    </td>
                  )}
                  <td className="px-6">
                    <div className="flex items-center">
                      <MarketChart
                        isGrowth={token.Change > 0}
                        data={[0.2, 0.5, 1, 0.1, 5, 0.5, 3, 2, 1]}
                        sizeChart={sizeChart}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserHome;
