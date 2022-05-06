import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./currencyReducer";
import {backDropReducer} from "./backdropReducer"
import { cartReducer } from "./cartReducer";

const rootReducers = combineReducers({
    currency:currencyReducer,
    backdrop: backDropReducer,
    cart:cartReducer
})

export default rootReducers