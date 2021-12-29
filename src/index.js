import { render } from "react-dom";
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
import  store  from './components/store/store';
import { Provider } from 'react-redux';
import { StrictMode } from "react";

import './index.css';

/*const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="expenses" element={<Expenses />} /> }*/
      //{/* <Route path="invoices" element={<Invoices />} /> }*/
   /* </Routes>
  </BrowserRouter>
  </Provider>,

  rootElement
);*/

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')

);