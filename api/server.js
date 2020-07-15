const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/carsRouter')
const db = require('../data/connection')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/api/cars', (req, res) => {
    db('cars')
      .then((cars) => {
        res.status(200).json({ data: cars });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
});

module.exports = server;
