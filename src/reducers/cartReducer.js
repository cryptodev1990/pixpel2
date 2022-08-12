import { ADD_CART, REMOVE_CART } from "../actions/type";

const Cart = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.payload];

    case REMOVE_CART:
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};

export default Cart;
