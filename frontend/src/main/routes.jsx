/* eslint-disable no-unused-vars */
import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import GridBoxesMain from '../gridBoxes/gridBoxesMain';

export default props => (
  <Router history={hashHistory}>
    <Route path="/boxes" component={GridBoxesMain} />
    <Redirect from="*" to="/" />
  </Router>
);

