import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Bootstrap from './libs/bootstrap/bootstrap';

import MainLayout from './app/MainLayout';
import Home from './home/Home';
import About from './about/About';
import RegimenApp from './regimen/App';

const app = document.getElementById('app');

require('./app/styles/base.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={MainLayout} >
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sandbox" component={RegimenApp} />
    </Route>
  </Router>
  ,app
);
