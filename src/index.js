import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
