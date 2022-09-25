import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectStaking, setSelectStaking] = useState(0);
  return (
    <AppContext.Provider 
      value={{ 
        selectedIndex,
        selectStaking,
        setSelectedIndex,
        setSelectStaking,
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