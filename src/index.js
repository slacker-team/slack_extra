import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, RouteHandler, IndexRoute } from 'react-router';
import DashBoard from './containers/DashBoard'

const store = configureStore();
const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
    <DashBoard />
  </Provider>,
  document.getElementById('root')
);
