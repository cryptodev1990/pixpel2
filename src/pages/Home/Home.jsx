import React from "react";
import "./Home.scss"
import Banner from  "../../components/Banner/Banner"
import Button from  "../../components/Button/Button"
import Header from  "../../components/Header/Header"

const Home = () => {

    return (<>
            <div className="home">
                <Header/>
                <div className="container-fluid">
                    <Banner bannerBg={'assets/images/home/header__top.jpg'} classes="banner--offset-bottom">
                       <div className="container">
                           <h1 className="title banner__title">
                               PLAY 2 EARN, SAFE AND FUN
                           </h1>
                           <p className="text banner__text">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt volutpat ligula sed
                               dignissim. Cras sagittis, purus at tempor sollicitudin, lacus mauris accumsan erat, quis
                               posuere leo mi sed lectus.
                           </p>
                           <form className="banner__form">
                               <input type="text" className="banner__input" placeholder="Enter Email / Phone number"/>
                               <Button classes="banner__btn btn--brand ">
                                   Play
                               </Button>
                           </form>
                           <div className="row row--space-between">
                               <div className="col-lg-3">
                                   <div className="banner__card">
                                       <h3 className="title banner__card-title">
                                           $76 billion
                                       </h3>
                                       <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                   </div>
                               </div>
                               <div className="col-lg-3">
                                   <div className="banner__card">
                                       <h3 className="title banner__card-title">
                                           $76 billion
                                       </h3>
                                       <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                   </div>
                               </div>
                               <div className="col-lg-3">
                                   <div className="banner__card">
                                       <h3 className="title banner__card-title">
                                           $76 billion
                                       </h3>
                                       <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                   </div>
                               </div>
                               <div className="col-lg-3">
                                   <div className="banner__card">
                                       <h3 className="title banner__card-title">
                                           $76 billion
                                       </h3>
                                       <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                    </Banner>
                </div>
                <div className="container">
                    <div className="section section--offset-bottom">
                        <h2 className="section__title">
                            SAFETY
                        </h2>
                        <div className="section__row">
                            <div className="section__card">
                                <div className="section__card-title">
                                    PIXPEL PLATFORM IS A THIRD
                                </div>
                                <div className="text section__card-text">
                                    Party that hold the value of the NFT, avoiding rug pull and rug slip. The value of
                                    the
                                    NFT is holded in stablecoins pixpel coins or the game token
                                </div>
                            </div>
                            <div className="section__card">
                                <div className="section__card-title">
                                    PIXPEL PLATFORM IS A THIRD
                                </div>
                                <div className="text section__card-text">
                                    Party that hold the value of the NFT, avoiding rug pull and rug slip. The value of
                                    the
                                    NFT is holded in stablecoins pixpel coins or the game token
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <Banner bannerBg={'assets/images/home/main__bg.jpg'} classes="banner--offset-bottom">
                        <div className="container">
                            <h1 className="title banner__title">
                                PLAY 2 EARN, SAFE AND FUN
                            </h1>
                            <p className="text banner__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt volutpat ligula sed
                                dignissim. Cras sagittis, purus at tempor sollicitudin, lacus mauris accumsan erat, quis
                                posuere leo mi sed lectus.
                            </p>
                            <form className="banner__form">
                                <Button classes="banner__btn btn--brand ">
                                    Play
                                </Button>
                            </form>
                            <div className="row row--space-between">
                                <div className="col-lg-3">
                                    <div className="banner__card">
                                        <h3 className="title banner__card-title">
                                            $76 billion
                                        </h3>
                                        <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="banner__card">
                                        <h3 className="title banner__card-title">
                                            $76 billion
                                        </h3>
                                        <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="banner__card">
                                        <h3 className="title banner__card-title">
                                            $76 billion
                                        </h3>
                                        <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="banner__card">
                                        <h3 className="title banner__card-title">
                                            $76 billion
                                        </h3>
                                        <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Banner>
                </div>
                <div className="container">
                    <div className="section section--offset-bottom">
                        <h2 className="section__title">
                            SAFETY
                        </h2>
                        <div className="section__row">
                            <div className="section__card">
                                <div className="section__card-title">
                                    PIXPEL PLATFORM IS A THIRD
                                </div>
                                <div className="text section__card-text">
                                    Party that hold the value of the NFT, avoiding rug pull and rug slip. The value of
                                    the
                                    NFT is holded in stablecoins pixpel coins or the game token
                                </div>
                            </div>
                            <div className="section__card">
                                <div className="section__card-title">
                                    PIXPEL PLATFORM IS A THIRD
                                </div>
                                <div className="text section__card-text">
                                    Party that hold the value of the NFT, avoiding rug pull and rug slip. The value of
                                    the
                                    NFT is holded in stablecoins pixpel coins or the game token
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <Banner bannerBg={'assets/images/home/footer__bg.jpg'} classes="banner--offset-bottom">
                        <div className="container">
                            <h1 className="title banner__title">
                                PLAY 2 EARN, SAFE AND FUN
                            </h1>
                            <p className="text banner__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt volutpat ligula sed
                                dignissim. Cras sagittis, purus at tempor sollicitudin, lacus mauris accumsan erat, quis
                                posuere leo mi sed lectus.
                            </p>
                            <form className="banner__form">
                                <Button classes="banner__btn btn--brand ">
                                    Play
                                </Button>
                            </form>
                            <div className="row row--space-between">
                                <div className="col-lg-3">
                                    <div className="banner__card">
                                        <h3 className="title banner__card-title">
                                            $76 billion
                                        </h3>
                                        <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="banner__card">
                                        <h3 className="title banner__card-title">
                                            $76 billion
                                        </h3>
                                        <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="banner__card">
                                        <h3 className="title banner__card-title">
                                            $76 billion
                                        </h3>
                                        <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="banner__card">
                                        <h3 className="title banner__card-title">
                                            $76 billion
                                        </h3>
                                        <p className="text banner__card-text">24h trading volume on Binance exchange</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Banner>
                </div>
                <div className="container">
                    <div className="section section--offset-bottom">
                        <h2 className="section__title">
                            SAFETY
                        </h2>
                        <div className="section__row">
                            <div className="section__card">
                                <div className="section__card-title">
                                    PIXPEL PLATFORM IS A THIRD
                                </div>
                                <div className="text section__card-text">
                                    Party that hold the value of the NFT, avoiding rug pull and rug slip. The value of
                                    the
                                    NFT is holded in stablecoins pixpel coins or the game token
                                </div>
                            </div>
                            <div className="section__card">
                                <div className="section__card-title">
                                    PIXPEL PLATFORM IS A THIRD
                                </div>
                                <div className="text section__card-text">
                                    Party that hold the value of the NFT, avoiding rug pull and rug slip. The value of
                                    the
                                    NFT is holded in stablecoins pixpel coins or the game token
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Home