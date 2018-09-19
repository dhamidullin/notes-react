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

var Note = mongoose.model("Note");

router.use(auth);

router.get((req, res, next) => {
  /* get one with id or all */
});

router.put((req, res, next) => {
  /* insert one */
  let note = new Note();

  note.title = req.body.title;
  note.body = req.body.body;
  note.owner_id = req.user._id;

  note.save((err, newNote) => {
    console.log("inserted new note ", newNote);
    console.log("err ", err);
    res.status(200).end();
  });
});

router.post((req, res, next) => {
  /* update one */
});

router.delete((req, res, next) => {
  /* remoove one */
});

module.exports = router;
