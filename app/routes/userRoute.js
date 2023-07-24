'use strict'
var express = require('express');
var userController = require('../controllers/userController');

var api = express.Router();
api.post('/register', userController.register);
api.post('/getuser', userController.getuser);
api.post('/addproduct', userController.addproduct);
api.post('/getproductseller', userController.getproductseller);
api.post('/getproduct', userController.getproduct);
api.post('/findproduct', userController.findproduct);
api.post('/findproductRange', userController.findproductrange);

module.exports = api;