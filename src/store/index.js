import {configureStore, createStore} from "@reduxjs/toolkit"
import rootReducers from "../reducers"
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    rootReducers,
    composeWithDevTools()
)

export default store