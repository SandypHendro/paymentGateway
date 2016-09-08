var express = require("express");
var route     = express.Router();

var models = require('../models/index');
var customerController = require ('../controllers/customerController');

route.get('/customers', customerController.custL);
route.get('/customers/:id', customerController.custR);
route.post("/customers", customerController.custC);
route.put("/customers/:id", customerController.custU);

module.exports = route;
