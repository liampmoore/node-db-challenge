const express = require('express');
const helmet = require('helmet');
const projectRouter = require('../projects/projects-router.js');


const server = express();

server.use(logger)
server.use(express.json())


server.get('/api/', (req, res) => {
  res.send('Welcome to the project API.\n\n You can POST projects, tasks, and project resources. You can also GET a list of projects, tasks, or project resources. \n\n/api/projects\n/api/tasks\n/api/resources')
})
server.use('/api/projects', projectRouter)




function logger(req, res, next) {
    console.log("\x1b[36m", `${req.method}`, "\x1b[32m", `to ${req.originalUrl}`)
    next()
  }


module.exports = server;