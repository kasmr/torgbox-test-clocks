import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Reducer } from './redux/Reducer';
import { Provider } from 'react-redux';

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));
