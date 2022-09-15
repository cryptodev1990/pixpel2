import { WITHDRAW_SHOW_MODAL } from "./type";
import { WITHDRAW_CLOSE_MODAL } from "./type";

export const withdrawShowModal = () => {
  return {
    type: WITHDRAW_SHOW_MODAL,
  };
};

export const withdrawCloseModal = () => {
  return {
    type: WITHDRAW_CLOSE_MODAL,
  };
};
