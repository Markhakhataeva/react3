import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const reducer = (state=0,action) => {
    switch(action.type) {
        case "add":
            return state + 1

        case "min":
            return state - 1

        case "reset":
            return state =0

    }
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

