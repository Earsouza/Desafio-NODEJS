import express from "express";
import bodyParser from "body-parser";

import empresaRoutes from './routes/empresa.js';
import licencaRoutes from './routes/licenca.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/empresa', empresaRoutes);
app.use('/licenca', licencaRoutes);


app.get('/', (req, res) => {
    console.log('[TEST]');

    res.send('Homepage');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT})`));
