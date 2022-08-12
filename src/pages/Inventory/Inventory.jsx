import React from "react";
import {Header} from "../../components";
import {Chart as ChartJS} from 'chart.js/auto';
import {Pie, Bar} from 'react-chartjs-2';
import "./Inventory.scss"

const Inventory = () => {
    const data = {
        datasets: [
            {
                data: [12, 8, 3],
                backgroundColor: [
                    '#717A8B',
                    '#37404C',
                    '#48515F',
                ],
                borderColor: [
                    '#717A8B',
                    '#37404C',
                    '#48515F',
                ],
                borderWidth: 1,
            },
        ],
    };
    const dataPieWin = {
        datasets: [
            {
                data: [12],
                backgroundColor: [
                    '#48515F',
                ],
                borderColor: [
                    '#48515F',
                ],
                borderWidth: 1,
            },
        ],
    };
    const dataPieLose = {
        datasets: [
            {
                data: [12],
                backgroundColor: [
                    '#48515F',
                ],
                borderColor: [
                    '#48515F',
                ],
                borderWidth: 1,
            },
        ],
    };
    const optionsBar = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            point: {
                radius: 0
            }
        },
        scales: {

            y: {
                display: false,
            }
        }
    };
    const labels = ['PVP', 'PVG', 'FARM', 'LAND'];

    function card() {
        return Array.from({length: 100}, (_, i) => (
            <div className="inventory-card">
                <div className="inventory-card__img">
                    <img src="assets/images/market/ply.png" className="inventory-card__picture" alt=""/>
                </div>
                <div className="inventory-card__text">
                    -16%
                </div>
            </div>
        ));
    }

    const dataBar = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1, 2, 3, 4, 5, 6],
                backgroundColor: '#48515F',
            },
        ],
    }
    return (<>
            <div className="inventory">
                <Header></Header>
                <div className="container">
                    <h1 className="title inventory__title">
                        Inventory
                    </h1>
                    <div className="inventory__row">

                        <div className="inventory__col widget" style={{height: '100%',width:'100%', maxWidth: 780, marginRight: 30}}>
                            <div className="widget__row" style={{gap: 30}}>
                                <div className="widget__col" >
                                    <div className="widget__tools">
                                        <button className="widget__btn">
                                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L5.5 5.5M10 10L5.5 5.5M5.5 5.5L1 10L10 1" stroke="#717A8B"
                                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            HIDE THIS WINDOW
                                        </button>
                                        <button className="widget__btn widget__btn--dollar">
                                            $
                                        </button>
                                    </div>
                                    <img src="assets/images/market/inventory.png" alt=""/>
                                </div>
                                <div className="widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="widget__title" style={{marginTop: 20, marginBottom: 10}}>
                                Statistic
                            </h2>
                            <div className="widget__row widget__box">
                                <div className="widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                                <div className="widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                                <div className="widget__item widget__item--offset-top">
                                    <div className="widget__item-name">ATTACK</div>
                                    <div className="widget__item-value">120</div>
                                </div>
                            </div>
                            <h2 className="widget__title" style={{marginTop: 33, marginBottom: 10}}>
                                GARNINGS
                            </h2>
                            <div className="widget__row widget__box">
                                <div className="widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                                <div className="widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                                <div className="widget__item widget__item--offset-top">
                                    <div className="widget__item-name">ATTACK</div>
                                    <div className="widget__item-value">120</div>
                                </div>
                            </div>
                            <h2 className="widget__title"  style={{marginTop: 42, marginBottom: 10}}>
                                Graph
                            </h2>
                            <div className="widget__row widget__box widget__col--pie">
                                <div className="widget__col">
                                    <Pie data={data} style={{width: 274, height: 274}}></Pie>
                                </div>
                                <div className="widget__col">
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                    <div className="widget__item">
                                        <div className="widget__item-name">ATTACK</div>
                                        <div className="widget__item-value">120</div>
                                    </div>
                                </div>
                            </div>

                            <Bar data={dataBar} options={optionsBar} style={{height: 170}}></Bar>
                            <div className="widget__row widget__row--offset">
                                <div className="widget__col">
                                    <div className="widget__title" style={{marginBottom: 16}}>
                                        Win
                                    </div>
                                    <Pie data={dataPieLose}></Pie>
                                </div>
                                <div className="widget__col">
                                    <div className="widget__title" style={{marginBottom: 16}}>
                                        Lose
                                    </div>

                                    <Pie data={dataPieWin}></Pie>
                                </div>
                            </div>
                            <div className="widget__footer">
                                <div className="widget__footer-name">
                                    ROI <span className="widget__footer-days">60 days</span>
                                </div>
                                <div className="widget__progress">
                                    <div className="widget__progress-inner"></div>
                                </div>
                            </div>
                        </div>

                        <div className="inventory__col" style={{width: 940}}>
                            <div className="inventory__row row-wrap">
                                {card()}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inventory