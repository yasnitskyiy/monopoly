import {combineReducers, legacy_createStore} from "redux";
import homeReducer from "./homeReducer";
import userMenuReducer from "./UserMenuReducer";

let reducers = combineReducers({
    homePage: homeReducer,
    userMenu: userMenuReducer,
});

const store = legacy_createStore(reducers);

// console.log(store.getState())

export default store;