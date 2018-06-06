/* eslint react/prop-types: 0 */
import React from 'react';
import moment from 'moment';

import Grid from '../common/layout/grid';
import IconButton from '../common/layout/iconButton';


export default (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(doc => (
      <tbody>
        <tr className="text-center">
          <td >{doc.nota}</td>
          <td>{doc.serie}</td>
          <td>{doc.cgc}</td>
          <td>{moment(doc.emissao).format('DD/MM/YYYY')}</td>
          <td>{moment(doc.embarque).format('DD/MM/YYYY')}</td>
          <td>{doc.estadoDest}</td>
          <td>{doc.cidadeDest}</td>
          <td>{doc.cgcTransp}</td>
          <td><span className={doc.cor === true ? 'label label-success' : 'label label-danger'}>{doc.ocorrencia}</span></td>
          <td>
            <span className="teste"><IconButton
              style="warning"
              icon="undo"
              onClick={() => props.markAsDone(doc)}
            />
            </span>
          </td>
        </tr>

      </tbody>
    ));
  };


  return (
    <Grid cols="12 9 12">
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr className="text-center">
            <th className="data-sort">Nota</th>
            <th>Serie</th>
            <th>CNPJ</th>
            <th>Emissao</th>
            <th>Embarque</th>
            <th>UF</th>
            <th>Cidade</th>
            <th>Transportadora</th>
            <th>Ocorrencias</th>
            <th>Liberação de nota</th>
          </tr>
        </thead>
        {renderRows()}
      </table>
    </Grid>
  );
};
