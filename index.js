'use strict'
require = require("esm")(module/*, options*/);
require('dotenv').config();

var https = require('https');
var app = require('./app');
var port = rocess.env.PORT || 8080;

app.listen(port, function () {
    console.log('Api Magic listening on port: ' + port);
});