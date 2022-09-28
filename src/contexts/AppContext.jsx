import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectStaking, setSelectStaking] = useState(0);
  const [buyCryptoState, setBuyCryptoState] = useState(2);
  const [p2PState, setP2PState] = useState(0);
  const [depositState, setDepositState] = useState(0);
  const [orderBuyState, setOrderBuyState] = useState(0);
  const [orderSellState, setOrderSellState] = useState(0);
  const [developerHeader, setDeveloperHeader] = useState(-1);
  const [playerHeader, setPlayerHeader] = useState(-1);
  return (
    <AppContext.Provider
      value={{
        selectedIndex,
        selectStaking,
        setSelectedIndex,
        setSelectStaking,
        buyCryptoState,
        setBuyCryptoState,
        p2PState,
        setP2PState,
        depositState,
        setDepositState,
        orderBuyState,
        setOrderBuyState,
        orderSellState,
        setOrderSellState,
        developerHeader,
        playerHeader,
        setDeveloperHeader,
        setPlayerHeader
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.object,
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);
