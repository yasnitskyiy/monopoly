import {combineReducers, legacy_createStore} from "redux";
import homeReducer from "./homeReducer";
import formikReducer from "./formikReducer";
import userMenuReducer from "./UserMenuReducer";

let reducers = combineReducers({
    homePage: homeReducer,
    formikForm: formikReducer,
    userMenu: userMenuReducer,
});

const store = legacy_createStore(reducers);

// console.log(store.getState())

export default store;