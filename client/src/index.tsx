import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { rootReducer } from './core/store/reducers';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './core/store/epics';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
