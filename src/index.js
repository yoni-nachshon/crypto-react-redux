import React from 'react'
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { store } from './components/store'
import { Provider } from 'react-redux'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
