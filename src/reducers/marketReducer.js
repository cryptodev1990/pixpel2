import { MARKET_SUCCESS_HANDLE } from "../actions/type";

const marketReducer = (state = false, action) => {
  switch (action.type) {
    case MARKET_SUCCESS_HANDLE:
      return !state;

    default:
      return state;
  }
};

export default marketReducer;
