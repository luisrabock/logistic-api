/* eslint react/prop-types: 0 */
import React from 'react';
import moment from 'moment';

import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton';


export default (props) => {
  console.log(props.list);
  const renderRows = () => {
    const list = props.list || [];
    return list.map(doc => (
      <tbody key={doc.num_nota_fiscal}>
        <tr className="text-center">
          <td >{doc.COD_EMPRESA}</td>
          <td >{doc.NUM_NOTA_FISCAL}</td>
          <td >{doc.SERIE_NOTA}</td>
          <td >{doc.NOME_CLIENTE}</td>
          <td >{doc.PEDIDO_VENDA}</td>
        </tr>
      </tbody>
    ));
  };


  return (
    <Grid cols="12 9 12">
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr className="text-center">
            <th>Empresa</th>
            <th>Nota</th>
            <th>Serie</th>
            <th>Cliente</th>
            <th>Pedido</th>
          </tr>
        </thead>
        {renderRows()}
      </table>
    </Grid>
  );
};
