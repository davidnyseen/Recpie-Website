import { render } from "react-dom";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
import './index.css';
import  store  from './components/store/store'
import { Provider } from 'react-redux'
import { StrictMode } from "react";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="expenses" element={<Expenses />} /> */}
      {/* <Route path="invoices" element={<Invoices />} /> */ /*UIII*/}
    </Routes>
  </BrowserRouter>
  </Provider>,

  rootElement
);