import { ActionTypes } from "."

export const addToCart =(product)=>{
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
export const reduceCartAmount = (id)=>{
    return{
        type:ActionTypes.DECREASE_CART_AMOUNT,
        payload:id
    }
}
export const increaseCartAmount = (id)=>{
    return{
        type:ActionTypes.INCREASE_CART_AMOUNT,
        payload:id
    }
}
export const updateCart = (updatedAttribute, id) =>{
    return { 
        type: ActionTypes.UPDATE_CART,
        payload:{updatedAttribute, id}
    }
}