import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NFTGameCard from "./NFTGameCard";
import { gameList } from "../../pages/NFTMarket/dataList";

const GameSlider = ({ cartClicked }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: !cartClicked ? 10 : 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: !cartClicked ? 8 : 6,
          slidesToScroll: 8,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: !cartClicked ? 7 : 5,
          slidesToScroll: 7,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: !cartClicked ? 6 : 4,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: !cartClicked ? 5 : 3,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: !cartClicked ? 3 : 2,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: !cartClicked ? 2 : 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        {gameList.map((game, idx) => {
          return (
            <NFTGameCard
              key={idx}
              img={game.img}
              gameName={game.gameName}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default GameSlider;
