var mongoose = require("mongoose");
var winston = require("winston");
var crypto = require("crypto");
var jwt = require("jsonwebtoken");
var config = require("../config");

var NoteSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    owner_id: String
  },
  { timestamps: true }
);

mongoose.model("Note", NoteSchema);
