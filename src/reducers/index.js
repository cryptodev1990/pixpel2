import cartReducer from './cartReducer';
import { combineReducers } from "redux";

export default combineReducers({ cart: cartReducer });

