const express = require('express'); // importando pacote
const routes = require('./routes'); // './' para importar um arquivo
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);