import React from "react";
import "./GameCard.scss"

const GameCard = () => {
    return (
        <div className="game-card">
            <div className="game-card__top">
                <div className="game-card__btn game-card__btn--to-cart">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.2513 13.8334C6.57347 13.8334 6.83463 13.5722 6.83463 13.2501C6.83463 12.9279 6.57347 12.6667 6.2513 12.6667C5.92914 12.6667 5.66797 12.9279 5.66797 13.2501C5.66797 13.5722 5.92914 13.8334 6.2513 13.8334Z" stroke="#717A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.6654 13.8334C12.9875 13.8334 13.2487 13.5722 13.2487 13.2501C13.2487 12.9279 12.9875 12.6667 12.6654 12.6667C12.3432 12.6667 12.082 12.9279 12.082 13.2501C12.082 13.5722 12.3432 13.8334 12.6654 13.8334Z" stroke="#717A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.58203 1.58325H3.91536L5.4787 9.39409C5.53204 9.66265 5.67814 9.9039 5.89143 10.0756C6.10472 10.2473 6.3716 10.3385 6.64536 10.3333H12.3154C12.5891 10.3385 12.856 10.2473 13.0693 10.0756C13.2826 9.9039 13.4287 9.66265 13.482 9.39409L14.4154 4.49992H4.4987" stroke="#717A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    ADD TO CART
                </div>
                <div className="game-card__btn game-card__btn--to-cart">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.0013 12.8334C10.223 12.8334 12.8346 10.2217 12.8346 7.00008C12.8346 3.77842 10.223 1.16675 7.0013 1.16675C3.77964 1.16675 1.16797 3.77842 1.16797 7.00008C1.16797 10.2217 3.77964 12.8334 7.0013 12.8334Z" stroke="#717A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 9.33333V7" stroke="#717A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 4.66675H7.00667" stroke="#717A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    INFO
                </div>
            </div>
            <div className="game-card__main">
                <img src="assets/images/market/game-card.jpg" alt=""/>
            </div>
            <div className="game-card__bottom">
                <div className="game-card__item">
                    <div className="game-card__name">
                        BOXES OPENED
                    </div>
                    <div className="game-card__value">
                        4K
                    </div>
                </div>
                <div className="game-card__item">
                    <div className="game-card__name">
                        BOXES LEFT
                    </div>
                    <div className="game-card__value">
                        10K
                    </div>
                </div>
                <div className="game-card__item">
                    <div className="game-card__name">
                        MYSTERY BOX PRICE
                    </div>
                    <div className="game-card__value">
                        10K
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameCard