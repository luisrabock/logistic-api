const express = require('express');

const router = express.Router();
const oracledb = require('oracledb');

const connAttrs = {
  user: 'systextil',
  password: 'oracle',
  connectString: '//192.168.0.45:1521/XE',
};

// get generico
router.get('/', (req, res) => {
  oracledb.getConnection(connAttrs, (err, connection) => {
    if (err) {
      // Error connecting to DB
      res.set('Content-Type', 'application/json');
      res.status(500).send(JSON.stringify({
        status: 500,
        message: 'Error connecting to DB',
        detailed_message: err.message,
      }));
      return;
    }
    connection.execute(`select DISTINCT pcpc_320.cod_empresa,fatu_050.num_nota_fiscal,fatu_050.serie_nota_fisc,pedi_010.nome_cliente,fatu_050.pedido_venda,supr_010.nome_fornecedor,fatu_050.valor_itens_nfis,pcpc_320.situacao_volume from pcpc_320, fatu_050, pedi_010, basi_160,supr_010
    where pcpc_320.nota_fiscal = fatu_050.num_nota_fiscal
    and pcpc_320.serie_nota = fatu_050.serie_nota_fisc
    and fatu_050.cgc_9 = pedi_010.cgc_9
    and fatu_050.cgc_4 = pedi_010.cgc_4
    and fatu_050.cgc_2 = pedi_010.cgc_2
    and fatu_050.transpor_forne9 = supr_010.fornecedor9
    and fatu_050.transpor_forne4 = supr_010.fornecedor4
    and fatu_050.transpor_forne2 = supr_010.fornecedor2
    and pedi_010.cod_cidade = basi_160.cod_cidade
    and pcpc_320.local_caixa not in (0,9)`, {}, {
      outFormat: oracledb.OBJECT, // Return the result as Object
    }, (err, result) => {
      if (err) {
        res.set('Content-Type', 'application/json');
        res.status(500).send(JSON.stringify({
          status: 500,
          message: 'Error return data',
          detailed_message: err.message,
        }));
      } else {
        res.contentType('application/json').status(200);
        res.send(JSON.stringify(result.rows));
      }
      // Release the connection
      connection.release((err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('GET /caixas : Connection released');
        }
      });
    });
  });
});

// get generico
router.get('/sum', (req, res) => {
  oracledb.getConnection(connAttrs, (err, connection) => {
    if (err) {
      // Error connecting to DB
      res.set('Content-Type', 'application/json');
      res.status(500).send(JSON.stringify({
        status: 500,
        message: 'Error connecting to DB',
        detailed_message: err.message,
      }));
      return;
    }
    connection.execute(`select SUM(DISTINCT fatu_050.valor_itens_nfis) as sum from pcpc_320, fatu_050, pedi_010, basi_160,supr_010
    where pcpc_320.nota_fiscal = fatu_050.num_nota_fiscal
    and pcpc_320.serie_nota = fatu_050.serie_nota_fisc
    and fatu_050.cgc_9 = pedi_010.cgc_9
    and fatu_050.cgc_4 = pedi_010.cgc_4
    and fatu_050.cgc_2 = pedi_010.cgc_2
    and fatu_050.transpor_forne9 = supr_010.fornecedor9
    and fatu_050.transpor_forne4 = supr_010.fornecedor4
    and fatu_050.transpor_forne2 = supr_010.fornecedor2
    and pedi_010.cod_cidade = basi_160.cod_cidade
    and pcpc_320.local_caixa not in (0,9)`, {}, {
      outFormat: oracledb.OBJECT, // Return the result as Object
    }, (err, result) => {
      if (err) {
        res.set('Content-Type', 'application/json');
        res.status(500).send(JSON.stringify({
          status: 500,
          message: 'Error return data',
          detailed_message: err.message,
        }));
      } else {
        res.contentType('application/json').status(200);
        res.send(JSON.stringify(result.rows));
      }
      // Release the connection
      connection.release((err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log('GET /caixas/sum : Connection released');
        }
      });
    });
  });
});
module.exports = router;
