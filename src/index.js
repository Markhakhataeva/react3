import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const initialState = 0
const reducer = (state=initialState,action) => {
    switch(action.type) {
        case "add":
            return state + 1

        case "min":
            return state - 1

        case "reset":
            return state = 0

        default:
            return state
    }
}

const preloadedState = JSON.parse(localStorage.getItem('counter'))

const store = createStore(reducer,preloadedState ? preloadedState : initialState);

store.subscribe(()=>{
    localStorage.setItem("counter",store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

