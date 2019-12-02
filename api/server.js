const express = require('express');
const helmet = require('helmet');

const carRouter = require('../helpers/carRouter')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carRouter);

server.get('/', (req, res) => {
  res.status(200).send(`<h2>Web DB II Challenge</h2>`)
})
module.exports = server;
