import { createStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const loadState = () => {
  try {
    const localState = localStorage.getItem("state");
    return localState ? JSON.parse(localState) : {};
  } catch (error) {
    return {};
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (error) {
    return {};
  }
};

const storedState = loadState();
const store = createStore(
  rootReducers,
  { ...storedState, backdrop: false },
  composeWithDevTools()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
