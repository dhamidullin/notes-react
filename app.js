"use strict";
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var winston = require("winston");
/*  */
var cfg = require("./config");

mongoose.Promise = require("bluebird");
mongoose
  .connect(
    cfg.db_uri,
    {
      useNewUrlParser: true,
      promiseLibrary: require("bluebird")
    }
  )
  .then(() => {
    console.log("MongoDB connection succesful");
    // mongoose.connection.collection('users').remove();
  })
  .catch(err => console.error(err));

require("./models/User");
require("./models/Note");

require("./passport");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));
app.use(passport.initialize());

/* log all request */
app.use((req, res, next) => {
  console.log(
    req.method +
      ": " +
      req.url +
      (req.method == "POST" || req.method == "PUT"
        ? ", " + JSON.stringify(req.body)
        : "")
  );

  next();
});

app.use("/api/authentication", require("./routes/authentication"));
app.use("/api/notes", require("./routes/notes"));

module.exports = app;
