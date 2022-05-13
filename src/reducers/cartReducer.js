import { ActionTypes } from "../actions";


export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return [...state,{ ...action.payload, cartAmount:1}];

    case ActionTypes.REMOVE_FROM_CART:
      return state.filter((v) => v.id !== action.payload);

    case ActionTypes.INCREASE_CART_AMOUNT:
      return state.map((val) => {
        return val.id === action.payload
          ? { ...val, cartAmount: val.cartAmount + 1 }
          : val;
      });

    case ActionTypes.DECREASE_CART_AMOUNT:
      return state.map((val) => {
        return val.id === action.payload
          ? { ...val, cartAmount: val.cartAmount - 1 }
          : val;
      });

    case ActionTypes.UPDATE_CART:
      return state.map((val) => {
        return val.id === action.payload.id
          ? { ...val, attributes: action.payload.updatedAttribute }
          : val;
      });

    default:
      return state;
  }
};
