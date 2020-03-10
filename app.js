const express = require('express');
const sql = require('mssql');
const app = express();
// const routes = require('./routes'); 
const port = process.env.PORT || 3000;
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json()); 
// app.use('/service', routes);

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
