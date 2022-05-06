import { ActionTypes } from "."

export const addToCart =(product)=>{
    console.log("pro", product)
    return {
        type:ActionTypes.ADD_TO_CART,
        payload:product
    }
}
export const removeFromCart =(id)=>{
    return {
        type:ActionTypes.REMOVE_FROM_CART,
        payload:id
    }
}