import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import handleInfo from './reducers/handleInfo';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const BASE_URL = 'https://mms-estimate-mgmt.herokuapp.com/'

const store = createStore(handleInfo, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
    document.getElementById('root'))


serviceWorker.unregister();

export default BASE_URL;
