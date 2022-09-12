import cartReducer from './cartReducer';
import withdrawReducer from './withdrawReducer';
import { combineReducers} from "redux";

export default combineReducers({ 
    cart: cartReducer,
    withdraw: withdrawReducer 
});

