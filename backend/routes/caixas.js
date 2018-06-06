const express = require('express');

const router = express.Router();
const oracledb = require('oracledb');

const connAttrs = {
  user: '****', // USER
  password: '******', // PASSWORD
  connectString: '****', // DB CONNECTION
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

    connection.execute(`YOUR
    QUERY
    HERE`, {}, {
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
module.exports = router;
