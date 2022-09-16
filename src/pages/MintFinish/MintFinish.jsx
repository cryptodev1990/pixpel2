import React from "react";
import "./MintFinish.scss";

const MintFinish = () => {
  return (
    <>
      <div className="developer">
        <div className="container">
          <div className="developer__row">
            <div
              className="developer__col"
              style={{
                height: "100%",
                width: "100%",
                maxWidth: 780,
                marginRight: 30,
              }}
            >
              <div className="widget__row">
                <div className="widget__col">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="assets/images/market/inventory.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="developer__col w100">
              <div className="developer__row row-wrap w100 flex-dic-col">
                <div className="widget__row widget__box w100">
                  <div className="widget__item widget__item--offset-top">
                    <div className="widget__item-name">Name</div>
                    <div className="widget__item-value">Archer</div>
                  </div>
                  <div className="widget__item widget__item--offset-top">
                    <div className="widget__item-name">Collection</div>
                    <div className="widget__item-value">The Warrior</div>
                  </div>
                  <div className="widget__item widget__item--offset-top">
                    <div className="widget__item-name">Total Supply</div>
                    <div className="widget__item-value">800</div>
                  </div>
                </div>
                <div className="widget__row widget__box w100 jc-sb fw-nw mt-1">
                  <button class="table__btn table__btn--stake margin-left-i w100">
                    Open auction
                  </button>
                  <button class="table__btn table__btn--mystery margin-left-i w100">
                    Mystery box
                  </button>
                  <button class="table__btn table__btn--price margin-left-i w100">
                    Fix Price
                  </button>
                </div>
                <div className="justify-s col-gap-10">
                  <div className="fill">
                    <div className="widget__item-name">QTY:</div>
                    <div className="widget__item widget__item--offset-top">
                      <div className="widget__item-name">500</div>
                    </div>
                  </div>

                  <div className="fill">
                    <div className="widget__item-name">QTY:</div>
                    <div className="widget__item widget__item--offset-top">
                      <div className="widget__item-name">500</div>
                    </div>
                  </div>

                  <div className="fill">
                    <div className="widget__item-name">QTY:</div>
                    <div className="widget__item widget__item--offset-top">
                      <div className="widget__item-name">500</div>
                    </div>
                  </div>
                </div>
                <div className="justify-s col-gap-10">
                  <div className="fill">
                    <div className="widget__item-name">Price:</div>
                    <div className="widget__item widget__item--offset-top">
                      <div className="justify">
                        <img
                          src="assets/images/Userhome/avax.png"
                          className="developer-card__picture"
                          alt=""
                        />
                        <div className="widget__item-name">472 249</div>
                      </div>
                    </div>
                  </div>

                  <div className="fill">
                    <div className="widget__item-name">Duration:</div>
                    <div className="widget__item widget__item--offset-top">
                      <div className="justify">
                        <div className="widget__item-name">500</div>
                      </div>
                    </div>
                  </div>

                  <div className="fill">
                    <div className="widget__item-name">Price:</div>
                    <div className="widget__item widget__item--offset-top">
                      <div className="justify">
                        <img
                          src="assets/images/Userhome/avax.png"
                          className="developer-card__picture"
                          alt=""
                        />
                        <div className="widget__item-name">472 249</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-s col-gap-10">
                  <div className="fill">
                    <div className="widget__item-name">Duration:</div>
                    <div className="widget__item widget__item--offset-top">
                      <div className="widget__item-name">500</div>
                    </div>
                  </div>
                  <div className="fill"></div>
                  <div className="fill">
                    <div className="widget__item-name">Duration:</div>
                    <div className="widget__item widget__item--offset-top">
                      <div className="widget__item-name">500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="developer__row mt-4">
            <div
              className="developer__col"
              style={{
                height: "100%",
                width: "100%",
                maxWidth: 780,
                marginRight: 30,
              }}
            >
              <div className="widget__row w100">
                <div className="widget__row widget__box widget w100 flex-dic-col">
                  <h2
                    className="widget__title"
                    style={{ marginTop: 20, marginBottom: 10 }}
                  >
                    Details
                  </h2>
                  <div className="widget__col">
                    <div className="widget__item">
                      <div className="widget__item-name">Contract address</div>
                      <div className="widget__item-value">9324n12d91bas</div>
                    </div>
                    <div className="widget__item">
                      <div className="widget__item-name">Token ID:</div>
                      <div className="widget__item-value">
                        234nd29dn0sm1smxn3n
                      </div>
                    </div>
                    <div className="widget__item">
                      <div className="widget__item-name">Token Standard</div>
                      <div className="widget__item-value">BEP-2U</div>
                    </div>
                    <div className="widget__item">
                      <div className="widget__item-name">Blockchain:</div>
                      <div className="widget__item-value">Binance</div>
                    </div>
                  </div>

                  <div className="widget__item widget__item--offset-top">
                    <div className="widget__item-name">Creator Fee:</div>
                    <div className="widget__item-value">5% </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="developer__col w100">
              <div className="widget__row w100">
                <div className="widget__row widget__box widget w100">
                  <div className="widget__col">
                    <h2 className="widget__title">Listing</h2>
                    <div className="flex mt-2">
                      <div className=" fill">
                        <h6>price</h6>
                        <h5>200 PIXP</h5>
                      </div>
                      <div className=" fill">
                        <h6>USD</h6>
                        <h5>200 USD</h5>
                      </div>
                      <div className=" fill">
                        <h6>Type</h6>
                        <h5>Fix Price</h5>
                      </div>
                      <div className=" fill">
                        <h6>Date</h6>
                        <h5>28-04-2022 </h5>
                      </div>
                    </div>
                    <div className="line mt"></div>
                    <div className="flex">
                      <div className=" fill">
                        <h5>200 PIXP</h5>
                      </div>
                      <div className=" fill">
                        <h5>200 USD</h5>
                      </div>
                      <div className=" fill">
                        <h5>Fix Price</h5>
                      </div>
                      <div className=" fill">
                        <h5>28-04-2022</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget__row w100 mt-2">
                <div className="widget__row widget__box widget w100">
                  <div className="widget__col">
                    <div className="widget__title">Offers</div>
                    <div className="flex mt-2">
                      <div className=" fill">
                        <h6>price</h6>
                        <h5>200 PIXP</h5>
                      </div>
                      <div className=" fill">
                        <h6>USD</h6>
                        <h5>200 USD</h5>
                      </div>
                      <div className=" fill">
                        <h6>Type</h6>
                        <h5>Fix Price</h5>
                      </div>
                      <div className=" fill">
                        <h6>Date</h6>
                        <h5>28-04-2022 </h5>
                      </div>
                    </div>
                    <div className="line mt"></div>
                    <div className="flex">
                      <div className=" fill">
                        <h5>200 PIXP</h5>
                      </div>
                      <div className=" fill">
                        <h5>200 USD</h5>
                      </div>
                      <div className=" fill">
                        <h5>Fix Price</h5>
                      </div>
                      <div className=" fill">
                        <h5>28-04-2022</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MintFinish;
