const express = require('express');

const port = 5000;

const server = express();

const userRoutes = require('./users/userRoutes');

function logger(req, res, next){
    console.log(`${req.method} request sent to ${req.url}`);
    next();
}

server.use(express.json())
server.use(logger);

server.use('/users', userRoutes);



server.listen(port, () =>{
    console.log(`Server Listening on port ${port}`);
});