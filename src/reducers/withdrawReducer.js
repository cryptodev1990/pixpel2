import { WITHDRAW_CLOSE_MODAL, WITHDRAW_SHOW_MODAL } from "../actions/type";

const withdrawReducer = (state = false, action) => {
  switch (action.type) {
    case WITHDRAW_SHOW_MODAL:
      return true;

    case  WITHDRAW_CLOSE_MODAL:
      return false;

    default:
      return state;
  }
};

export default withdrawReducer;
