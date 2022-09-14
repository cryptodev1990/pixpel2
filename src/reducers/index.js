import cartReducer from './cartReducer';
import withdrawReducer from './withdrawReducer';
import marketReducer from './marketReducer';
import { combineReducers} from "redux";

export default combineReducers({ 
    cart: cartReducer,
    withdraw: withdrawReducer,
    market: marketReducer ,
});

