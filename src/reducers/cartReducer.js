import { ActionTypes } from "../actions";

export const cartReducer=(state = [], action)=>{
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return [...state, action.payload]
        case ActionTypes.REMOVE_FROM_CART:
            return state
        default:
            return state
    }
}