import React from "react";
import { useState } from "react";
import { Header, Filter, NFTCard, Cart, CardModal } from "../../components";
import "./NFTMarket.scss";

const initialCards = [
    { id: 1, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 2, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 3, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 4, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 5, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 6, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 7, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 8, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 9, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 10, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 11, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 12, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 13, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 14, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 15, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 16, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 17, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 18, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 19, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 20, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
    { id: 21, name: 'H1 hero text for you', image: 'assets/images/market/nft-1.jpg' },
];
const NFTMarket = () => {
    const cards = initialCards;
    const [modalShow, setModalShow] = useState(false);

    return (<>
        <div className="market">
            <Header></Header>
            <div className="container">
                <h1 className="title market__title">
                    NFT Market Place
                </h1>
                <div className="game-market__inner">
                    <div className="game-market__wrap" style={{ width: 1180 }}>
                        <Filter classes={"filter--offset-bottom"}></Filter>
                        <div className="row-wrap market__row">
                            {cards.map(card => <NFTCard key={card.id} data={card} showModal={() => {setModalShow(!modalShow)}}></NFTCard>)}
                        </div>

                        <div className="game-market__cart" style={{ right: -80 }}>
                            <Cart></Cart>
                        </div>
                    </div>
                </div>
            </div>
            <CardModal show={modalShow} handleClose={() => {setModalShow(false)}}/>
        </div>
    </>)
}

export default NFTMarket