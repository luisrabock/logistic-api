/* eslint react/prop-types: 0 */
import React from 'react';
import moment from 'moment';

import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton';

// Apenas volumes faturados
const volumeFaturado = value => value.SITUACAO_VOLUME === 2;
const sum = [1, 2, 3].reduce((a, b) => a + b, 0);


export default (props) => {
  const renderRows = () => {
    const list = props.list || [];
    const filtered = list.filter(volumeFaturado);
    return filtered.map(doc => (
      <tbody key={doc.num_nota_fiscal}>
        <tr className="text-center">
          <td >{doc.COD_EMPRESA}</td>
          <td >{doc.NUM_NOTA_FISCAL}</td>
          <td >{doc.SERIE_NOTA_FISC}</td>
          <td >{doc.NOME_CLIENTE}</td>
          <td >{doc.PEDIDO_VENDA}</td>
          <td >{doc.NOME_FORNECEDOR}</td>
          <td ><span>R$ </span>{doc.VALOR_ITENS_NFIS.toFixed(2)}</td>
        </tr>
      </tbody>
    ));
  };
  const renderSum = () => {
    const sum = props.sum || [];
    return sum.map(reg => (
      <tfoot>
        <tr>
          <td>TOTAIS</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td><span>R$ </span>{reg.SUM.toFixed(2)}</td>
        </tr>
      </tfoot>
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
            <th>Transportadora</th>
            <th>Valor da nota</th>
          </tr>
        </thead>
        {renderRows()}
        {renderSum()}
      </table>
    </Grid>
  );
};
