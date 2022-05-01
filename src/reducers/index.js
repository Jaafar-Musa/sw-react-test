import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./currencyReducer";

const rootReducers = combineReducers({
    currency:currencyReducer
})

export default rootReducers