import React from "react";
import {Header, Filter, GameCard, MarketChart} from "../../components";
import "./Stacking.scss"
const Stacking = () => {
    return (
        <div className="stacking">
            <Header></Header>
            <div className="container">
                <h1 className="title stacking__title">Staking</h1>
                <div className="stacking__status">
                    <h2 className="stacking__status-name">
                        Locked
                    </h2>
                    <div className="stacking__status-btns">
                        <button className="stacking__status-btn stacking__status-btn--active">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.25 13.75H7.5C6.11929 13.75 5 14.8693 5 16.25V25C5 26.3807 6.11929 27.5 7.5 27.5H21.25C22.6307 27.5 23.75 26.3807 23.75 25V16.25C23.75 14.8693 22.6307 13.75 21.25 13.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.84766 12.7556V9.00562C8.84766 7.34801 9.44029 5.7583 10.4952 4.5862C11.5501 3.4141 12.9808 2.75562 14.4727 2.75562C15.9645 2.75562 17.3952 3.4141 18.4501 4.5862C19.505 5.7583 20.0977 7.34801 20.0977 9.00562V12.7556" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </button>
                        <button className="stacking__status-btn">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.25 13.75H7.5C6.11929 13.75 5 14.8693 5 16.25V25C5 26.3807 6.11929 27.5 7.5 27.5H21.25C22.6307 27.5 23.75 26.3807 23.75 25V16.25C23.75 14.8693 22.6307 13.75 21.25 13.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.84766 12.7556V9.00562C8.84766 7.34801 9.44029 5.7583 10.4952 4.5862C11.5501 3.4141 12.9808 2.75562 14.4727 2.75562C15.9645 2.75562 17.3952 3.4141 18.4501 4.5862C19.505 5.7583 20.0977 7.34801 20.0977 9.00562" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="table stacking__table">
                    <div className="table__tr">
                        <div className="table__th">
                            Token
                        </div>
                        <div className="table__th">
                            Game
                        </div>
                        <div className="table__th">
                            Invest
                        </div>
                        <div className="table__th">
                            Duration
                        </div>
                        <div className="table__th">
                            Minimum
                        </div>
                        <div className="table__th"></div>
                    </div>
                    <div className="table__tr">
                        <div className="table__td">
                            <img src="assets/images/UserHome/bnb.png" className="table__icon" alt=""/>
                            BNB
                        </div>
                        <div className="table__td">
                            Crypto Box
                        </div>
                        <div className="table__td">
                            7.8%
                        </div>
                        <div className="table__td">
                            <div className="table__duration">
                                90
                            </div>
                        </div>
                        <div className="table__td">
                            2 PIXP
                        </div>
                        <div className="table__td">
                            <button className="table__btn table__btn--stake">STAKE</button>
                        </div>
                    </div>
                    <div className="table__tr">
                        <div className="table__td">
                            <img src="assets/images/UserHome/bnb.png" className="table__icon" alt=""/>
                            BNB
                        </div>
                        <div className="table__td">
                            Crypto Box
                        </div>
                        <div className="table__td">
                            7.8%
                        </div>
                        <div className="table__td">
                            <div className="table__duration">
                                90
                            </div>
                        </div>
                        <div className="table__td">
                            2 PIXP
                        </div>
                        <div className="table__td">
                            <button className="table__btn table__btn--stake">STAKE</button>
                        </div>
                    </div>
                    <div className="table__tr">
                        <div className="table__td">
                            <img src="assets/images/UserHome/bnb.png" className="table__icon" alt=""/>
                            BNB
                        </div>
                        <div className="table__td">
                            Crypto Box
                        </div>
                        <div className="table__td">
                            7.8%
                        </div>
                        <div className="table__td">
                            <div className="table__duration">
                                90
                            </div>
                        </div>
                        <div className="table__td">
                            2 PIXP
                        </div>
                        <div className="table__td">
                            <button className="table__btn table__btn--stake">STAKE</button>
                        </div>
                    </div>
                    <div className="table__tr">
                        <div className="table__td">
                            <img src="assets/images/UserHome/bnb.png" className="table__icon" alt=""/>
                            BNB
                        </div>
                        <div className="table__td">
                            Crypto Box
                        </div>
                        <div className="table__td">
                            7.8%
                        </div>
                        <div className="table__td">
                            <div className="table__duration">
                                90
                            </div>
                        </div>
                        <div className="table__td">
                            2 PIXP
                        </div>
                        <div className="table__td">
                            <button className="table__btn table__btn--stake">STAKE</button>
                        </div>
                    </div>
                    <div className="table__tr">
                        <div className="table__td">
                            <img src="assets/images/UserHome/bnb.png" className="table__icon" alt=""/>
                            BNB
                        </div>
                        <div className="table__td">
                            Crypto Box
                        </div>
                        <div className="table__td">
                            7.8%
                        </div>
                        <div className="table__td">
                            <div className="table__duration">
                                90
                            </div>
                        </div>
                        <div className="table__td">
                            2 PIXP
                        </div>
                        <div className="table__td">
                            <button className="table__btn table__btn--stake">STAKE</button>
                        </div>
                    </div>
                    <div className="table__tr">
                        <div className="table__td">
                            <img src="assets/images/UserHome/bnb.png" className="table__icon" alt=""/>
                            BNB
                        </div>
                        <div className="table__td">
                            Crypto Box
                        </div>
                        <div className="table__td">
                            7.8%
                        </div>
                        <div className="table__td">
                            <div className="table__duration">
                                90
                            </div>
                        </div>
                        <div className="table__td">
                            2 PIXP
                        </div>
                        <div className="table__td">
                            <button className="table__btn table__btn--stake">STAKE</button>
                        </div>
                    </div>
                    <div className="table__tr">
                        <div className="table__td">
                            <img src="assets/images/UserHome/bnb.png" className="table__icon" alt=""/>
                            BNB
                        </div>
                        <div className="table__td">
                            Crypto Box
                        </div>
                        <div className="table__td">
                            7.8%
                        </div>
                        <div className="table__td">
                            <div className="table__duration">
                                90
                            </div>
                        </div>
                        <div className="table__td">
                            2 PIXP
                        </div>
                        <div className="table__td">
                            <button className="table__btn table__btn--stake">STAKE</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Stacking