const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json(`Api is running ${PORT}`)
});

const PORT = process.env.PORT || 999;

server.listen(PORT, () => console.log(`API is running on port ${PORT}`));