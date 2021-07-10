const express = require('express');
const RutaDulces = require('./rutas/RutaDulces');
const RutaSabrita = require('./rutas/RutaSabrita');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/dulces',RutaDulces);
app.use('/Sabrita',RutaSabrita);


module.exports = app;