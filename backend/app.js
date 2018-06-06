/* eslint-disable non-used vars */
const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const pedidoRoutes = require('./routes/caixas');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/caixas', pedidoRoutes);


module.exports = app;
