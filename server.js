const express = require('express');

const server = express();

//middleware, npm i helmet
//third party middleware
//installed globally
// so people can't see using express.  It is security.
const helmet = require('helmet')

const postsRouter = require('./posts/postRouter')
const usersRouter = require('./users/userRouter')

function dateLogger(req, res, next){
  console.log(new Date().toISOString())
}

server.use(helmet())
server.use(express.json())

//to use everywhere
server.use(dateLogger)// custom logger


server.use('', postsRouter)
server.use('', usersRouter)

// morgan, npm i morgan

// logger logs to the console the following information about each request: request method, request url, and a timestamp
// this middleware runs on every request made to the API
//custom middleware
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}]${req.method}, ${req.path}, ${req.params.timestamp}`)

    next()
}

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});


module.exports = server;
