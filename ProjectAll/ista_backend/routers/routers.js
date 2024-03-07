const express = require("express");
const { PostSigup } = require("../allOtherPart/sign");

const Router = express.Router();

Router.get("/", (req, res) => {
  res.send({ msg: "get data" });
});

Router.post("/signup",PostSigup)
module.exports = { Router };
