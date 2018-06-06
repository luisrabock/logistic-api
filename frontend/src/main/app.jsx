import React, { Component } from 'react';

import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from '../main/routes';
import '../common/template/custom.css';
import '../common/template/dependencias';
import '../common/layout/custom.css';


export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper" >
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}
