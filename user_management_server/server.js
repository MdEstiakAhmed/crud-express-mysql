const express = require('express');
require("dotenv").config();

const setMiddleware = require('./helpers/setMiddleware');
const setRoute = require('./helpers/setRoute');

const app = new express();

// middleware setup
setMiddleware(app);

// route setup
setRoute(app);

// server setup
const port = process.env.APPLICATION_PORT || 8000;
app.listen(port, () => { console.log(`server started at port ${port}`); });