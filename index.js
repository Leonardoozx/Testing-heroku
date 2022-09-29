const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send(`<h1> Executando na porta: ${port} </h1>`));

app.get('/', (_req, res) => {
  res.send('<h2>Mandando isso daqui pro github só pra testar mesmo</h2>');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
