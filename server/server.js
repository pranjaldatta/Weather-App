var express = require("express");
var path = require("path");
var router = require("./routes/router");

var app = express();

app.set("views" , path.join(__dirname , "../client"));
app.use(express.static(path.join(__dirname , "../client")));
app.use("/" , router)

module.exports = app ;