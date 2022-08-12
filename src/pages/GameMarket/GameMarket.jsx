import React from "react";
import {Header, Filter, GameCard, Cart} from "../../components";
import "../../components/Cart/Cart.scss"
import "./GameMarket.scss"
const isOpen = false
const GameMarket = () => {
    return (<>
            <div className="game-market">
                <Header></Header>
                <div className="container">
                    <h1 className="title game-market__title">
                        Game Market Place
                    </h1>
                    <div className="game-market__inner">
                        <div className="game-market__wrap" style={{width: 1325}}>
                            <Filter classes={"filter--offset-bottom"}></Filter>
                            <div className="row-wrap game-market__row">
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                                <GameCard></GameCard>
                            </div>
                        </div>
                        <div className="game-market__cart" style={{right: -210}}>
                            <Cart isOpen={isOpen} ></Cart>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default GameMarket