// config server
// middleware add functionalities
// route manages server side routing
// errorHandler manage error messages.

const server = require('express')();
const errorHandler = require('./helpers/errorHandler');
const notesRouter = require('./notes/notesRouter.js');
const authRouter = require('./auth/authRouter.js');
const { authenticate } = require('./auth/middlewares');

//* Middleware & Routes
require('./middleware')(server);

server.use('/auth', authRouter);
server.use('/api', notesRouter);
// server.use('/api', authenticate, notesRouter);

//* Error Handler
server.use(errorHandler);

module.exports = server;
