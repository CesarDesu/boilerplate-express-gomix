var express = require("express");
const path = require("path");
var app = express();
console.log("Hello World");

// app.use(express.json());

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  //   res.send("Hello Express");
  res.sendFile(path.join(__dirname, "/views/index.html"));
});
app.get("/json", (req, res) => {
  res.json({
    message: "Hello json",
  });
});

module.exports = app;
