const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'bdapi'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Conectado com sucesso ao banco de dados');
});