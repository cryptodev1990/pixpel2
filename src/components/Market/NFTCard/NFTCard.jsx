import React from "react";
import "./NFTCard.scss";
import { useDispatch } from "react-redux";

import { ADD_CART } from "../../../actions/type";

const NFTCard = ({ data, showModal }) => {
    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="card__top">
                <div className="card__name">
                    2 PIXP
                </div>
                <div className="card__btn card__btn--info">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.0013 12.8334C10.223 12.8334 12.8346 10.2217 12.8346 7.00008C12.8346 3.77842 10.223 1.16675 7.0013 1.16675C3.77964 1.16675 1.16797 3.77842 1.16797 7.00008C1.16797 10.2217 3.77964 12.8334 7.0013 12.8334Z" stroke="#717A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 9.33333V7" stroke="#717A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 4.66675H7.00667" stroke="#717A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    INFO
                </div>
            </div>
            <div className="card__main" onClick={showModal}>
                <img src="assets/images/market/nft-1.jpg" alt="" className="card__picture" />
            </div>
            <div className="card__footer">
                <div className="card__value">
                    -16%
                </div>
                <div className="card__btn card__btn--cart" onClick={() => dispatch({ type: ADD_CART, payload: data })}>
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.3763 16.5834C7.7675 16.5834 8.08463 16.2663 8.08463 15.8751C8.08463 15.4839 7.7675 15.1667 7.3763 15.1667C6.9851 15.1667 6.66797 15.4839 6.66797 15.8751C6.66797 16.2663 6.9851 16.5834 7.3763 16.5834Z" stroke="#0095C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.1654 16.5834C15.5566 16.5834 15.8737 16.2663 15.8737 15.8751C15.8737 15.4839 15.5566 15.1667 15.1654 15.1667C14.7742 15.1667 14.457 15.4839 14.457 15.8751C14.457 16.2663 14.7742 16.5834 15.1654 16.5834Z" stroke="#0095C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.70703 1.70825H4.54036L6.4387 11.1928C6.50347 11.519 6.68088 11.8119 6.93988 12.0204C7.19887 12.2289 7.52294 12.3396 7.85536 12.3333H14.7404C15.0728 12.3396 15.3969 12.2289 15.6559 12.0204C15.9148 11.8119 16.0923 11.519 16.157 11.1928L17.2904 5.24992H5.2487" stroke="#0095C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default NFTCard