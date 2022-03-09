import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Development only axios helper!
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reducThunk));

ReactDom.render(
    <Provider store = {store}><App/></Provider>,
    document.querySelector('#root')
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is', process.env.NODE_ENV);