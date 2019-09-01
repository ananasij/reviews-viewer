import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { rootReducer } from './core/store/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
