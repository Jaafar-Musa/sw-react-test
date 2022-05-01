import { ActionTypes } from "../actions";

const initialState = {
  symbol:"$",
  label:"USD"
};

const currencyReducer = (state =initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENCY:
      return action.payload;
      default:
        return state
  }
};

export default currencyReducer