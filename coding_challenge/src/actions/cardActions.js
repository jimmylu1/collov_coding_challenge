import { CONSTANTS } from "../actions";

export const addCard = (name) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: name,
  };
};
