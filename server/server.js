const express = require('express');
const cors = require('cors');


const server = express();
server.use(cors());
server.use(express.json());

const footballerRoute = require("./controllers/footballController");

server.use('/footballers', footballerRoute);

server.get('/', (req, res) => res.send("Hello I'm working!"));



module.exports = server;