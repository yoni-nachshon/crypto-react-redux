import React from 'react'
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App'


render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
