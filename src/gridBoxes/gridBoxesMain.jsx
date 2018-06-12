import React, { Component } from 'react';
import axios from 'axios';

import GridBoxesHeader from './gridBoxesHeader';
import GridBoxesForm from './gridBoxesForm';
import GridBoxesData from './gridBoxesData';
import Row from '../common/layout/row';


const URL = 'http://localhost:3300/caixas/';
const URL_SUM = 'http://localhost:3300/caixas/sum';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '', sum: '' };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.refresh();
    this.refreshSum();
  }
  refresh() {
    axios.get(URL)
      .then(resp => this.setState({ ...this.state, data: resp.data }));
  }

  refreshSum() {
    axios.get(URL_SUM)
      .then(resp => this.setState({ ...this.state, sum: resp.data }));
  }

  handleSearch() {
    this.refresh(this.state.data);
  }

  handleClear() {
    this.refresh();
  }

  handleChange(e) {
    this.setState({ data: e.target.value });
  }
  render() {
    return (
      <section className="content">
        <GridBoxesHeader name="Dashboard" small=" volumes faturados" />
        <GridBoxesForm
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          placeholder="Busca por número de nota fiscal"
        />
        <Row>
          <GridBoxesData
            list={this.state.data}
            sum={this.state.sum}
          />
        </Row>
      </section>
    );
  }
}
