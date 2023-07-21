import express from "express";
import bodyParser from "body-parser";

var app = express();
var user_routes = require('./app/routes/userRoute');

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use('/api', user_routes);

module.exports = app;