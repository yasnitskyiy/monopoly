import {combineReducers, legacy_createStore} from "redux";
import homeReducer from "./homeReducer";

let reducers = combineReducers({
    homePage: homeReducer,
});

const store = legacy_createStore(reducers);

// console.log(store.getState())

export default store;