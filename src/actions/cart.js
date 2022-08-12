import { ADD_CART, REMOVE_CART, FETCH_CARDS } from "./type";

export const addCart = info => {
  return {
    type: ADD_CART,
    payload: info
  };
};

export const removeCart = info => {
  return {
    type: REMOVE_CART,
    payload: info
  };
};
