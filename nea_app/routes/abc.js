var express = require("express");
var route = express.Router();

route.get('/name' , function (req,res) {
    res.send("this is my name")
});

module.exports = route;