const express = require('express'); // importando pacote
const routes = require('./routes'); // './' para importar um arquivo
const cors = require('cors');
const {errors} = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;