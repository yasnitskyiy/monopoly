import React from 'react';
import {Provider} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeReducer from "./features/home";
import userReducer from './features/user'

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
    reducer: {
        home: homeReducer,
        user: userReducer
    },
});

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

reportWebVitals();
