import React from 'react';
import store from "./store/store"

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Provider store={store}>
          <App/>
      </Provider>
  </BrowserRouter>
);

reportWebVitals();
