import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import {createStore} from 'redux';
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./redux/reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
