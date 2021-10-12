var express = require("express");
const dotenv = require("dotenv");
const path = require("path");
var app = express();
console.log("Hello World");
dotenv.config();

// app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${req.ip}`);
  next();
});

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  //   res.send("Hello Express");
  res.sendFile(path.join(__dirname, "/views/index.html"));
});
app.get("/json", (req, res) => {
  console.log(process.env.MESSAGE_STYLE);
  res.json({
    message:
      process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello json",
  });
});

app.get(
  "/now",
  (req, res, next) => {
    const date = new Date().toString();
    req.time = date;
    next();
  },
  (req, res) => {
    res.json({
      time: req.time,
    });
  }
);

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});

module.exports = app;
