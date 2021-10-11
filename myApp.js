var express = require("express");
const path = require("path");
var app = express();
console.log("Hello World");

app.get("/", (req, res) => {
  //   res.send("Hello Express");
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

module.exports = app;
