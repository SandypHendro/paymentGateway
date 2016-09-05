"use strict";

var express = require("express");
var app     = express();


var port = 5000;

var models = require('./models/index');

app.get('/',function (req,res) {
    res.json({message:"hello world"});
});

app.get('/customers',function (req,res) {
    models.Customer.findAll()
        .then(function (customers) {
            res.json({customer:customers})
        })
        .catch(function (err) {
            res.json({error:err});
        })
});

app.listen(port ,function () {
    console.log("server running at port" + port);
});