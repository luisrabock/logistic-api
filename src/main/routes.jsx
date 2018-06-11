/* eslint-disable no-unused-vars */
import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import GridBoxesMain from '../gridBoxes/gridBoxesMain';
import Home from '../home/home';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/boxes" component={GridBoxesMain} />
    <Redirect from="*" to="/" />
  </Router>
);

