import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const reducer = (state=0,action) => {
    if(action.type==='add'){
        return state+1;
    }

    if(action.type==='min'){
        return state-1;
    }

    if(action.type==='reset'){
        return state = 0;
    }


    return state
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

