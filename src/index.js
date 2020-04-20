import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/app';
import { restaurants } from './fixtures';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App restaurants={restaurants} />
  </Provider>,
  document.getElementById('root')
);
