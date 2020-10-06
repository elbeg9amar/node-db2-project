const express = require('express');
const helmet = require('helmet');

const carRouter = require('../car/car-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carRouter);



server.get('/', (req,res) => {
    res.status(200).json(`Api is running`)
});

module.exports = server;