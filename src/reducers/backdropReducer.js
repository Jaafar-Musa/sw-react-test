import { ActionTypes } from "../actions"

const initialState = false

export const backDropReducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.TOGGLE_BACKDROP:
            return !state
        default:
           return state
    }
}
