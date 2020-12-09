import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter basename="https://CodeSoom.github.io/project-react-2-koremp/">
        <App />
      </BrowserRouter>
    </Provider>

  ),
  document.getElementById('app'),
);
