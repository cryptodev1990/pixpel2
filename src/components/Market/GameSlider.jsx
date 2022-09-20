import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NFTGameCard from "./NFTGameCard";
import { gameList } from "../../pages/NFTMarket/dataList";

const GameSlider = ({ number }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: number,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {gameList.map((game, idx) => {
          return (
            <NFTGameCard key={idx} img={game.img} gameName={game.gameName} />
          );
        })}
      </Slider>
    </div>
  );
};

export default GameSlider;
