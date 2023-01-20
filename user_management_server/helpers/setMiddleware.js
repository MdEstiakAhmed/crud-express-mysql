const express = require('express');
const cors = require("cors");
const formidable = require('express-formidable');

const middleware = [
    cors(),
    // express.json(),
    formidable(),
];

module.exports = app => {
    middleware.forEach(m => {
        app.use(m);
    });
}