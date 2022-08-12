import TradeViewChart from "../../components/TradeChart/index"
// import TradeViewChart from 'react-crypto-chart'
import React from "react";
import {Header, Button } from "../../components";
import Select from 'react-select'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import "./Exchange.scss"
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#fff' : '#fff',
        background: '#29313C',
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 25,
        paddingRight: 25,
    }),
    control: () => ({
        background: '#29313C',
        borderRadius: '5px',
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 25,
        paddingRight: 25,
        display: 'flex'
    }),
    indicatorSeparator: () => (
        {

        }
    )

}
const orderFormSelectStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#fff' : '#fff',
        background: '#fff',
    }),
    control: () => ({
        background: '',
        borderRadius: '5px',
        display: 'flex'
    }),
    indicatorSeparator: () => (
        {

        }
    )

}
const Exchange = () => {
    return (<>
            <div className="exchange">
                <Header></Header>
                <div className="container">
                    <div className="exchange__container">
                        <div className="head">
                            <Select options={options} styles={customStyles} />
                            <div className="head__tab">
                                0.6149
                                <div className="head__tab-heading-bottom">
                                    0.6149
                                </div>
                            </div>
                            <div className="head__tab">
                                <div className="head__heading-bottom">
                                    24h Change
                                </div>
                                0.6149
                            </div>
                            <div className="head__tab">
                                <div className="head__heading-bottom">
                                    24h Low
                                </div>
                                0.6149
                            </div>
                            <div className="head__tab">
                                <div className="head__heading-bottom">
                                    24h Volume(ALPACA)
                                </div>
                                0.6149
                            </div>
                            <div className="head__tab">
                                <div className="head__heading-bottom">
                                    24h Volume(USD)
                                </div>
                                0.6149
                            </div>
                        </div>
                        <div className="market">
                            <div className="exchange__list exchange__box market__box market--offset">
                                <div className="exchange__list-heading">
                                    <div className="exchange__list-item">
                                        Price(USDT)
                                    </div>
                                    <div className="exchange__list-item">
                                        Amount(BTC)
                                    </div>
                                    <div className="exchange__list-item">
                                        Total
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                    40428.38
                                </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item  exchange__list-item--grow">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>

                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>

                            </div>
                            <div className="exchange__list exchange__box market__box ">
                                <div className="exchange__list-heading">
                                    <div className="exchange__list-item">
                                        Price(USDT)
                                    </div>
                                    <div className="exchange__list-item">
                                        Amount(BTC)
                                    </div>
                                    <div className="exchange__list-item">
                                        Total
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item  exchange__list-item--grow">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="orderform">
                            <div className="">
                                <Tabs>
                                    <TabList>
                                        <Tab>Spot</Tab>
                                        <Tab>Token</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="exchange__box orderform__box">
                                            <div className="orderform__header">
                                                <div className="orderform__header-col">
                                                    <a href="" className="orderform__header-link orderform__header-link--active">Limit</a>
                                                    <a href="" className="orderform__header-link">Market</a>
                                                    <Select className='orderform__header-link' options={options} styles={orderFormSelectStyles} />
                                                </div>
                                                <div className="orderform__header-col">
                                                    <a href="" className="orderform__header-link">Transfer</a>
                                                    <a href="" className="orderform__header-link">Borrow</a>
                                                    <a href="" className="orderform__header-link orderform__header-link--row">Buy with <span className="orderform__header-currency orderform__header-currency--offset">USD</span><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L5.5 5.5L1 10" stroke="#717A8B" stroke-width="2"/>
                                                    </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="orderform__main">
                                                <div className="orderform__main-col">
                                                    <div className="orderform__main-heading">
                                                        <div className="orderform__main-heading-name">Available</div>
                                                        <div className="orderform__main-heading-price">0.050930000 USDT</div>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset">
                                                        <input type="text" placeholder="Price" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">0.050930000 USDT</div>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset-15">
                                                        <input type="text" placeholder="Price" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">ALPACA</div>
                                                    </div>
                                                    <div className="exchange__range exchange__range--offset">
                                                        <svg  viewBox="0 0 405 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3.99609" y="8.90967" width="394.694" height="2.96985" fill="#37404C"/>
                                                            <rect y="2.11141" width="11.919" height="11.919" transform="matrix(0.710396 0.703802 -0.710396 0.703802 12.0976 0.625394)" fill="#29313C" stroke="#717A8B" stroke-width="3"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 112.914 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 208.84 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 304.766 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 400.348 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                        </svg>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset-15">
                                                        <input type="text" placeholder="Total" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">USDT</div>
                                                    </div>
                                                    <button className="exchange__btn exchange__btn--buy">
                                                        Buy ALPACA
                                                    </button>
                                                </div>
                                                <div className="orderform__main-col">
                                                    <div className="orderform__main-heading">
                                                        <div className="orderform__main-heading-name">Available</div>
                                                        <div className="orderform__main-heading-price">0.050930000 USDT</div>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset">
                                                        <input type="text" placeholder="Price" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">0.050930000 USDT</div>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset-15">
                                                        <input type="text" placeholder="Price" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">ALPACA</div>
                                                    </div>
                                                    <div className="exchange__range exchange__range--offset">
                                                        <svg  viewBox="0 0 405 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3.99609" y="8.90967" width="394.694" height="2.96985" fill="#37404C"/>
                                                            <rect y="2.11141" width="11.919" height="11.919" transform="matrix(0.710396 0.703802 -0.710396 0.703802 12.0976 0.625394)" fill="#29313C" stroke="#717A8B" stroke-width="3"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 112.914 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 208.84 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 304.766 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 400.348 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                        </svg>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset-15">
                                                        <input type="text" placeholder="Total" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">USDT</div>
                                                    </div>
                                                    <button className="exchange__btn exchange__btn--sell">
                                                        SELL ALPACA
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="exchange__box orderform__box">
                                            <div className="orderform__header">
                                                <div className="orderform__header-col">
                                                    <a href="" className="orderform__header-link orderform__header-link--active">Limit</a>
                                                    <a href="" className="orderform__header-link">Market</a>
                                                    <Select className='orderform__header-link' options={options} styles={orderFormSelectStyles} />
                                                </div>
                                                <div className="orderform__header-col">
                                                    <a href="" className="orderform__header-link">Transfer</a>
                                                    <a href="" className="orderform__header-link">Borrow</a>
                                                    <a href="" className="orderform__header-link orderform__header-link--row">Buy with <span className="orderform__header-currency orderform__header-currency--offset">USD</span><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L5.5 5.5L1 10" stroke="#717A8B" stroke-width="2"/>
                                                    </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="orderform__main">
                                                <div className="orderform__main-col">
                                                    <div className="orderform__main-heading">
                                                        <div className="orderform__main-heading-name">Available</div>
                                                        <div className="orderform__main-heading-price">0.050930000 USDT</div>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset">
                                                        <input type="text" placeholder="Price" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">0.050930000 USDT</div>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset-15">
                                                        <input type="text" placeholder="Price" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">ALPACA</div>
                                                    </div>
                                                    <div className="exchange__range exchange__range--offset">
                                                        <svg  viewBox="0 0 405 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3.99609" y="8.90967" width="394.694" height="2.96985" fill="#37404C"/>
                                                            <rect y="2.11141" width="11.919" height="11.919" transform="matrix(0.710396 0.703802 -0.710396 0.703802 12.0976 0.625394)" fill="#29313C" stroke="#717A8B" stroke-width="3"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 112.914 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 208.84 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 304.766 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 400.348 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                        </svg>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset-15">
                                                        <input type="text" placeholder="Total" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">USDT</div>
                                                    </div>
                                                    <button className="exchange__btn exchange__btn--buy">
                                                        Buy ALPACA
                                                    </button>
                                                </div>
                                                <div className="orderform__main-col">
                                                    <div className="orderform__main-heading">
                                                        <div className="orderform__main-heading-name">Available</div>
                                                        <div className="orderform__main-heading-price">0.050930000 USDT</div>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset">
                                                        <input type="text" placeholder="Price" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">0.050930000 USDT</div>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset-15">
                                                        <input type="text" placeholder="Price" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">ALPACA</div>
                                                    </div>
                                                    <div className="exchange__range exchange__range--offset">
                                                        <svg  viewBox="0 0 405 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="3.99609" y="8.90967" width="394.694" height="2.96985" fill="#37404C"/>
                                                            <rect y="2.11141" width="11.919" height="11.919" transform="matrix(0.710396 0.703802 -0.710396 0.703802 12.0976 0.625394)" fill="#29313C" stroke="#717A8B" stroke-width="3"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 112.914 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 208.84 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 304.766 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                            <rect y="1.4076" width="5.95679" height="5.95679" transform="matrix(0.710396 0.703802 -0.710396 0.703802 400.348 5.36664)" fill="#29313C" stroke="#717A8B" stroke-width="2"/>
                                                        </svg>
                                                    </div>
                                                    <div className="exchange__input-wrap exchange__input-wrap--offset-15">
                                                        <input type="text" placeholder="Total" className="exchange__input orderform__main-input"/>
                                                        <div className="exchange__input-wrap-price">USDT</div>
                                                    </div>
                                                    <button className="exchange__btn exchange__btn--sell">
                                                        SELL ALPACA
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                        <div className="chart">
                            <TradeViewChart
                                containerStyle={{
                                    minHeight: "500px",
                                    minWidth: "1000px",
                                    marginBottom: "30px"
                                }}
                                chartLayout={{
                                    layout: {
                                        backgroundColor: "transparent",
                                        textColor: "#717A8B"
                                    },
                                    grid: {
                                        vertLines: {
                                            color: "#28313E"
                                            // style: LineStyle.SparseDotted,
                                        },
                                        horzLines: {
                                            color: "#28313E"
                                            // style: LineStyle.SparseDotted,
                                        }
                                    },
                                    crosshair: {
                                        // mode: CrosshairMode.Normal,
                                    },
                                    priceScale: {
                                        borderColor: "#28313E"
                                    },
                                    timeScale: {
                                        borderColor: "#28313E",
                                        timeVisible: true,
                                        secondsVisible: false
                                    }
                                }}
                                candleStickConfig={  {
                                    upColor: "transparent",
                                    downColor: "transparent",
                                    borderDownColor: "transparent",
                                    borderUpColor: "transparent",
                                    wickDownColor: "transparent",
                                    wickUpColor: "transparent",
                                }}
                                pair="BTCUSDT"
                            />
                        </div>

                        <div className="orderbook">
                            <div className="exchange__list exchange__box market__box orderbook--offset">
                                <div className="exchange__list-heading">
                                    <div className="exchange__list-item">
                                        Price(USDT)
                                    </div>
                                    <div className="exchange__list-item">
                                        Amount(BTC)
                                    </div>
                                    <div className="exchange__list-item">
                                        Total
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item  exchange__list-item--grow">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                            </div>
                            <div className="exchange__list exchange__box trades__box">
                                <div className="exchange__list-heading">
                                    <div className="exchange__list-item">
                                        Price(USDT)
                                    </div>
                                    <div className="exchange__list-item">
                                        Amount(BTC)
                                    </div>
                                    <div className="exchange__list-item">
                                        Total
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item  exchange__list-item--grow">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item exchange__list-item--sell">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item  exchange__list-item--grow">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                                <div className="exchange__list-row">
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                    <div className="exchange__list-item">
                                        40428.38
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="history">
                            <div className="history__top">
                                <Button classes="btn--active history__btn history__btn--active">Open Orders</Button>
                                <Button classes="history__btn">Order History</Button>
                                <Button classes="history__btn">Trade History</Button>
                                <Button classes="history__btn">Funds</Button>
                            </div>
                            <div className="history__table table">
                                <div className="table__tr">
                                    <div className="table__th">
                                        Date
                                    </div>
                                    <div className="table__th">
                                        Pair
                                    </div>
                                    <div className="table__th">
                                        Kind
                                    </div>
                                    <div className="table__th">
                                        Order
                                    </div>
                                    <div className="table__th">
                                        Average
                                    </div>
                                    <div className="table__th">
                                        Price
                                    </div>
                                    <div className="table__th">
                                        Amount
                                    </div>
                                    <div className="table__th">
                                        Total
                                    </div>
                                    <div className="table__th">
                                        All
                                    </div>
                                </div>
                                <div className="table__data">
                                    <div className="table__tr">
                                        <div className="table__td">
                                            04-16 10:05:40
                                        </div>
                                        <div className="table__td">
                                            ALPACA/USDT
                                        </div>
                                        <div className="table__td">
                                            Limit
                                        </div>
                                        <div className="table__td">
                                            Complete
                                        </div>
                                        <div className="table__td">
                                            0.6137
                                        </div>
                                        <div className="table__td">
                                            0.6155
                                        </div>
                                        <div className="table__td">
                                            21.1
                                        </div>
                                        <div className="table__td">
                                            12.9391
                                        </div>
                                        <div className="table__td">
                                            Completed
                                        </div>
                                    </div>
                                    <div className="table__tr">
                                        <div className="table__td">
                                            04-16 10:05:40
                                        </div>
                                        <div className="table__td">
                                            ALPACA/USDT
                                        </div>
                                        <div className="table__td">
                                            Limit
                                        </div>
                                        <div className="table__td">
                                            Complete
                                        </div>
                                        <div className="table__td">
                                            0.6137
                                        </div>
                                        <div className="table__td">
                                            0.6155
                                        </div>
                                        <div className="table__td">
                                            21.1
                                        </div>
                                        <div className="table__td">
                                            12.9391
                                        </div>
                                        <div className="table__td">
                                            Completed
                                        </div>
                                    </div>
                                    <div className="table__tr">
                                        <div className="table__td">
                                            04-16 10:05:40
                                        </div>
                                        <div className="table__td">
                                            ALPACA/USDT
                                        </div>
                                        <div className="table__td">
                                            Limit
                                        </div>
                                        <div className="table__td">
                                            Complete
                                        </div>
                                        <div className="table__td">
                                            0.6137
                                        </div>
                                        <div className="table__td">
                                            0.6155
                                        </div>
                                        <div className="table__td">
                                            21.1
                                        </div>
                                        <div className="table__td">
                                            12.9391
                                        </div>
                                        <div className="table__td">
                                            Completed
                                        </div>
                                    </div>
                                    <div className="table__tr">
                                        <div className="table__td">
                                            04-16 10:05:40
                                        </div>
                                        <div className="table__td">
                                            ALPACA/USDT
                                        </div>
                                        <div className="table__td">
                                            Limit
                                        </div>
                                        <div className="table__td">
                                            Complete
                                        </div>
                                        <div className="table__td">
                                            0.6137
                                        </div>
                                        <div className="table__td">
                                            0.6155
                                        </div>
                                        <div className="table__td">
                                            21.1
                                        </div>
                                        <div className="table__td">
                                            12.9391
                                        </div>
                                        <div className="table__td">
                                            Completed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Exchange