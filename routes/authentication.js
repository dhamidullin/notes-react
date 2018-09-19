"use strict";
var express = require("express");
var router = express.Router();
var passport = require("passport");
var jwt = require("express-jwt");
var config = require("../config");
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var winston = require("winston");

var auth = jwt({
  secret: config.jwt_secret,
  userProperty: "user",
  getToken: req => {
    return req.headers.authorization;
  }
});

var User = mongoose.model("User");

router.use((req, res, next) => {
  console.log(req.url);
  next();
});
router.post("/register", function(req, res, next) {
  if (!req.body.username || !req.body.password || !req.body.repeat) {
    // 400 = bad request
    return res.status(400).json({ err: "Заполните все поля" });
  }

  if (req.body.password !== req.body.repeat) {
    // 400 = bad request
    return res.status(400).json({ err: "Пароли не совпадают" });
  }

  var user = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);

  user.save(err => {
    console.log(err);
    if (!err) {
      res.json({ token: user.generateJWT() });
    } else if (err.code === 11000) {
      // 01 Unauthorized
      res.status(401).json({ err: "Пользователь уже существует" });
    } else if (err) {
      console.log(err);
      res.status(500).json({ err: "Database error" });
    }
  });
});

router.post("/login", function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ err: "Заполните все поля" });
  }

  passport.authenticate("local", function(err, user, info) {
    if (err) {
      res.status(500);
      res.json({ err: "Database error" });
    } else if (user) {
      res.json({ token: user.generateJWT() });
    } else {
      res.status(401);
      res.json({ err: info });
    }
  })(req, res, next);
});

module.exports = router;
