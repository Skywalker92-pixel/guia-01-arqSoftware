const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: 'Servidor funcionando',
    curso: 'IS-488 Arquitectura de Software'
  });
});

module.exports = app;