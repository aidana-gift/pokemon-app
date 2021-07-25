import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/index.scss';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk"
import rootReducer from "./redux/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
              <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals