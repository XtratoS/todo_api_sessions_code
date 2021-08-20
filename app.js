const express = require("express");
const {todosRouter} = require("./routes")
const {CORS} = require("./middlewares");

// Create a new express app
const app = express();
// use cors middleware to allow front end to access your resources
app.use(CORS);
app.use(express.json()) // this middleware handles json requests

// use the router you've created
todosRouter(app)

// export the app for testing and development
module.exports = app;