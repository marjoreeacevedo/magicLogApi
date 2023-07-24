import express from "express";
import bodyParser from "body-parser";

var app = express();
var user_routes = require('./app/routes/userRoute');

//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});



//Routes
app.use('/api', user_routes);

module.exports = app;