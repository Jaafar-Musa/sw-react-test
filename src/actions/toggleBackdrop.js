import { ActionTypes } from "."

export const toggleBackdrop = (bool)=>{
    return{
        type:ActionTypes.TOGGLE_BACKDROP,
        payload:bool
    }
}