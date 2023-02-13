import express from "express";
import bodyParser from "body-parser";
import empresaRoutes from './routes/empresa.js';
import licencaRoutes from './routes/licenca.js';
import mysql2 from "mysql2";

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdapi'
  });

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/empresa', empresaRoutes);
app.use('/licenca', licencaRoutes);


app.get('/', (req, res) => {
    connection.query('SELECT * FROM EMPRESA', (err, result =>{
        res.send(result);
    }));
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT})`));
