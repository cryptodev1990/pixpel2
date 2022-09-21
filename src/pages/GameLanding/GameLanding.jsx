import React from "react";
import LandingHeader from "../../components/GameLanding/LandingHeader";
import Description from "../../components/GameLanding/Description";
import BuyWeapons from "../../components/GameLanding/BuyWeapons";
import TokenDetail from "../../components/GameLanding/TokenDetail";
import Chart from "../../components/GameLanding/Chart";
import Staking from "../../components/GameLanding/Staking";
import SmartInvest from "../../components/GameLanding/SmartInvest";
import Developers from "../../components/GameLanding/Developers";
import image from "../../asssets/images/home/landing1.png";

const GameLanding = () => {
  return (
    <div className="flex flex-col pb-20">
      <LandingHeader title="Dungeons & Bots" />
      <img src={image} alt="landing" />
      <Description />
      <BuyWeapons />
      <TokenDetail />
      <Chart />
      <Staking />
      <SmartInvest />
      <Developers />
    </div>
  )
}

export default GameLanding;