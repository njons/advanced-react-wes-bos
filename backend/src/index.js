// let's go!
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');
const server = createServer()

// use npm packages to do authetication at a later stage 

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }
}, deets => {
  console.log(`server is up and running on https://localhost:${deets.port}`);
})