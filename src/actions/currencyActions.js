import { ActionTypes } from ".";

export const setCurrency = (currency) => {
  return {
    type: ActionTypes.SET_CURRENCY,
    payload: currency,
  };
};
