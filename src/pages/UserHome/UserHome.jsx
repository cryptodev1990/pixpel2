import React, { useRef, useEffect, useState } from "react";
import "./UserHome.scss"
import {Header, Button, MarketChart} from "../../components";
const UserHome = () => {
    const sizeChart = {
    maxHeight: 51, maxWidth: 124, marginLeft: 'auto'
    }
    return (<>

            <div className="user-home user-home--bg">
                <Header styles={{marginBottom: '200px'}}></Header>
                <div className="container">
                    <div className="user-home__top">
                        <h1 className="title user-home__top-title">
                            Play your favorite game
                        </h1>
                        <p className="user-home__top-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt volutpat ligula sed
                            dignissim. Cras sagittis, purus at tempor sollicitudin, lacus mauris accumsan erat, quis
                            posuere leo mi sed lectus.
                        </p>
                        <Button className="user-home__top-btn" classes="btn--brand">
                            Play now
                        </Button>
                    </div>

                    <div className="row user-home__section user-home__section--offset">
                        <div className="col-lg-3">
                            <div className="user-home__card">
                                <img src="assets/images/UserHome/1.jpg" alt="" className="user-home__card-image "/>
                                <div className="user-home__card-name">
                                    CRYPRO BOTS
                                </div>
                                <div className="user-home__card-title">
                                    232 321+ users
                                </div>
                                <div className="user-home__card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="user-home__card">
                                <img src="assets/images/UserHome/1.jpg" alt="" className="user-home__card-image "/>
                                <div className="user-home__card-name">
                                    CRYPRO BOTS
                                </div>
                                <div className="user-home__card-title">
                                    232 321+ users
                                </div>
                                <div className="user-home__card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="user-home__card">
                                <img src="assets/images/UserHome/1.jpg" alt="" className="user-home__card-image "/>
                                <div className="user-home__card-name">
                                    CRYPRO BOTS
                                </div>
                                <div className="user-home__card-title">
                                    232 321+ users
                                </div>
                                <div className="user-home__card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="user-home__card">
                                <img src="assets/images/UserHome/1.jpg" alt="" className="user-home__card-image "/>
                                <div className="user-home__card-name">
                                    CRYPRO BOTS
                                </div>
                                <div className="user-home__card-title">
                                    232 321+ users
                                </div>
                                <div className="user-home__card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-home__nfts user-home__section user-home__section--offset">
                        <div className="box-header user-home__nfts-top">
                            <h2 className="box-header__title user-home__nfts-title">
                                Recent NFTs
                            </h2>
                            <Button classes="box-header__btn user-home__nfts-btn btn--brand">Buy now</Button>
                        </div>
                        <div className="row-wrap user-home__row">
                            <div className="user-home__nft">
                                <button className="user-home__nft-btn">

                                </button>
                                <img src="assets/images/market/nft-1.jpg" className="user-home__nft-picture" alt=""/>
                                <div className="user-home__nft-list">
                                    <div className="user-home__nft-item">
                                        <div className="user-home__nft-name">
                                            Name
                                        </div>
                                        <div className="user-home__nft-value">
                                            Bid
                                        </div>
                                    </div>
                                    <div className="user-home__nft-item">
                                        <div className="user-home__nft-name">
                                            Mustang
                                        </div>
                                        <div className="user-home__nft-value">
                                            2 PIX
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-home__nft">
                                <button className="user-home__nft-btn">

                                </button>
                                <img src="assets/images/market/nft-1.jpg" className="user-home__nft-picture" alt=""/>
                                <div className="user-home__nft-list">
                                    <div className="user-home__nft-item">
                                        <div className="user-home__nft-name">
                                            Name
                                        </div>
                                        <div className="user-home__nft-value">
                                            Bid
                                        </div>
                                    </div>
                                    <div className="user-home__nft-item">
                                        <div className="user-home__nft-name">
                                            Mustang
                                        </div>
                                        <div className="user-home__nft-value">
                                            2 PIX
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-home__nft">
                                <button className="user-home__nft-btn">

                                </button>
                                <img src="assets/images/market/nft-1.jpg" className="user-home__nft-picture" alt=""/>
                                <div className="user-home__nft-list">
                                    <div className="user-home__nft-item">
                                        <div className="user-home__nft-name">
                                            Name
                                        </div>
                                        <div className="user-home__nft-value">
                                            Bid
                                        </div>
                                    </div>
                                    <div className="user-home__nft-item">
                                        <div className="user-home__nft-name">
                                            Mustang
                                        </div>
                                        <div className="user-home__nft-value">
                                            2 PIX
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-home__nft">
                                <button className="user-home__nft-btn">

                                </button>
                                <img src="assets/images/market/nft-1.jpg" className="user-home__nft-picture" alt=""/>
                                <div className="user-home__nft-list">
                                    <div className="user-home__nft-item">
                                        <div className="user-home__nft-name">
                                            Name
                                        </div>
                                        <div className="user-home__nft-value">
                                            Bid
                                        </div>
                                    </div>
                                    <div className="user-home__nft-item">
                                        <div className="user-home__nft-name">
                                            Mustang
                                        </div>
                                        <div className="user-home__nft-value">
                                            2 PIX
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-home__nft">
                                <button className="user-home__nft-btn">

                                </button>
                                <img src="assets/images/market/nft-1.jpg" className="user-home__nft-picture" alt=""/>
                                <div className="user-home__nft-list">
                                    <div className="user-home__nft-item">
                                        <div className="user-home__nft-name">
                                            Name
                                        </div>
                                        <div className="user-home__nft-value">
                                            Bid
                                        </div>
                                    </div>
                                    <div className="user-home__nft-item">
                                        <div className="user-home__nft-name">
                                            Mustang
                                        </div>
                                        <div className="user-home__nft-value">
                                            2 PIX
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="user-home__staking user-home__section user-home__section--offset">
                        <div className="box-header user-home__nfts-top">
                            <h2 className="box-header__title user-home__nfts-title">
                                Staking
                            </h2>
                            <Button classes="box-header__btn user-home__nfts-btn btn--brand">Stake now</Button>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="user-home__token-card">
                                    <div className="user-home__token-card-picture">
                                        <button className="user-home__token-card-btn">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.1654 9.16675H4.9987C4.07822 9.16675 3.33203 9.91294 3.33203 10.8334V16.6667C3.33203 17.5872 4.07822 18.3334 4.9987 18.3334H14.1654C15.0858 18.3334 15.832 17.5872 15.832 16.6667V10.8334C15.832 9.91294 15.0858 9.16675 14.1654 9.16675Z"
                                                    stroke="white" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M5.89844 8.50383V6.00383C5.89844 4.89876 6.29353 3.83895 6.99679 3.05755C7.70005 2.27615 8.65388 1.83716 9.64844 1.83716C10.643 1.83716 11.5968 2.27615 12.3001 3.05755C13.0033 3.83895 13.3984 4.89876 13.3984 6.00383V8.50383"
                                                    stroke="white" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <button className="user-home__token-card-btn">
                                            PIXPEL INSURANG
                                        </button>
                                        <img src="assets/images/market/game-card.jpg" className="user-home__nft-picture"
                                             alt=""/>
                                    </div>
                                    <div className="user-home__token-card-list">
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="user-home__token-card">
                                    <div className="user-home__token-card-picture">
                                        <button className="user-home__token-card-btn">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.1654 9.16675H4.9987C4.07822 9.16675 3.33203 9.91294 3.33203 10.8334V16.6667C3.33203 17.5872 4.07822 18.3334 4.9987 18.3334H14.1654C15.0858 18.3334 15.832 17.5872 15.832 16.6667V10.8334C15.832 9.91294 15.0858 9.16675 14.1654 9.16675Z"
                                                    stroke="white" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M5.89844 8.50383V6.00383C5.89844 4.89876 6.29353 3.83895 6.99679 3.05755C7.70005 2.27615 8.65388 1.83716 9.64844 1.83716C10.643 1.83716 11.5968 2.27615 12.3001 3.05755C13.0033 3.83895 13.3984 4.89876 13.3984 6.00383V8.50383"
                                                    stroke="white" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <button className="user-home__token-card-btn">
                                            PIXPEL INSURANG
                                        </button>
                                        <img src="assets/images/market/game-card.jpg" className="user-home__nft-picture"
                                             alt=""/>
                                    </div>
                                    <div className="user-home__token-card-list">
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="user-home__token-card">
                                    <div className="user-home__token-card-picture">
                                        <button className="user-home__token-card-btn">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.1654 9.16675H4.9987C4.07822 9.16675 3.33203 9.91294 3.33203 10.8334V16.6667C3.33203 17.5872 4.07822 18.3334 4.9987 18.3334H14.1654C15.0858 18.3334 15.832 17.5872 15.832 16.6667V10.8334C15.832 9.91294 15.0858 9.16675 14.1654 9.16675Z"
                                                    stroke="white" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M5.89844 8.50383V6.00383C5.89844 4.89876 6.29353 3.83895 6.99679 3.05755C7.70005 2.27615 8.65388 1.83716 9.64844 1.83716C10.643 1.83716 11.5968 2.27615 12.3001 3.05755C13.0033 3.83895 13.3984 4.89876 13.3984 6.00383V8.50383"
                                                    stroke="white" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <button className="user-home__token-card-btn">
                                            PIXPEL INSURANG
                                        </button>
                                        <img src="assets/images/market/game-card.jpg" className="user-home__nft-picture"
                                             alt=""/>
                                    </div>
                                    <div className="user-home__token-card-list">
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                        <div className="user-home__token-card-item">
                                            <div className="user-home__token-card-name">
                                                USER
                                            </div>
                                            <div className="user-home__token-card-value">
                                                100 K
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="user-home__token user-home__section user-home__section--offset">
                        <div className="box-header user-home__nfts-top">
                            <h2 className="box-header__title user-home__nfts-title">
                                Token trend
                            </h2>
                            <Button classes="box-header__btn user-home__nfts-btn btn--brand">Trade now</Button>
                        </div>
                        <div className="user-home__table table">
                            <div className="table__tr">
                                <div className="table__th">
                                    Name
                                </div>
                                <div className="table__th">
                                    Last Price
                                </div>
                                <div className="table__th">
                                    24h Change
                                </div>
                                <div className="table__th">
                                    Market Cap
                                </div>
                            </div>
                            <div className="table__tr">
                                <div className="table__td">
                                    <img src="assets/images/UserHome/bnb.png" className="table__icon" alt=""/>
                                    BNB
                                    <div className="table__full-name">
                                        BNB
                                    </div>
                                </div>
                                <div className="table__td">
                                    $45 832,04000
                                </div>
                                <div className="table__td" style={{color:"#2EBD85"}}>
                                    -1.73%
                                </div>
                                <div className="table__td table__td--chart">
                                    <MarketChart isGrowth={false} data={[0.2,0.5,1,0.1,2,0.5,3,2,1]} sizeChart={sizeChart}></MarketChart>

                                </div>
                            </div>
                            <div className="table__tr">
                                <div className="table__td">
                                    <img src="assets/images/UserHome/btc.png" className="table__icon" alt=""/>
                                    BTC
                                    <div className="table__full-name">
                                        Bitcoin
                                    </div>
                                </div>
                                <div className="table__td">
                                    $45 832,04000
                                </div>
                                <div className="table__td" style={{color:"#2EBD85"}}>
                                    -1.73%
                                </div>
                                <div className="table__td table__td--chart" >
                                    <MarketChart isGrowth={false} data={[0.2,0.5,1,0.1,0,0.5,3,2,1]} sizeChart={sizeChart}></MarketChart>
                                </div>
                            </div>
                            <div className="table__tr">
                                <div className="table__td">
                                    <img src="assets/images/UserHome/usdc.png" className="table__icon" alt=""/>
                                    USDC
                                    <div className="table__full-name">
                                        USD coin
                                    </div>
                                </div>
                                <div className="table__td">
                                    $45 832,04000
                                </div>
                                <div className="table__td" style={{color:"#F6465D"}}>
                                    -1.73%
                                </div>
                                <div className="table__td table__td--chart" >
                                    <MarketChart isGrowth={true} data={[0.2,0.5,1,0.1,1,0.5,3,2,1]} sizeChart={sizeChart}></MarketChart>
                                </div>
                            </div>
                            <div className="table__tr">
                                <div className="table__td">
                                    <img src="assets/images/UserHome/eth.png" className="table__icon" alt=""/>
                                    ETH
                                    <div className="table__full-name">
                                        Etherium
                                    </div>
                                </div>
                                <div className="table__td">
                                    $45 832,04000
                                </div>
                                <div className="table__td">
                                    -1.73%
                                </div>
                                <div className="table__td table__td--chart">
                                    <MarketChart isGrowth={false} data={[0.2,0.5,1,0.1,5,0.5,3,2,1]} sizeChart={sizeChart}></MarketChart>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserHome