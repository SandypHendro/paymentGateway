"use strict";

var bodyParser = require('body-parser');
var express = require("express");
var fs = require("fs");
var path = require("path");

var app     = express();
var port = 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/',function (req,res) {
    res.json({message:"hello world"});
});

var routersPath = path.join (__dirname, "routes");
fs.readdirSync(routersPath).forEach(function (file) {
    app.use(require("./routes/" + file));
});

app.listen(port ,function () {
    console.log("server running at port" + port);
});