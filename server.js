const express = require('express');

const server = express();

//middleware, npm i helmet
//third party middleware
//installed globally
// so people can't see using express.  It is security.
const helmet = require('helmet')

const postsRouter = require('./posts/postRouter')
const usersRouter = require('./users/userRouter')

const logger = require('./auth/logger')


server.use(helmet())
server.use(express.json())

//to use everywhere
server.use(logger)// custom logger


server.use('/posts', postsRouter)
server.use('/users', usersRouter)

// morgan, npm i morgan




server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});


module.exports = server;
