/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Wave = require("./models/wave");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

router.get("/waves", (req, res) => {
  // console.log("testing the get function");
  Wave.find({ userId: req.query.userId }).then((waves) => res.send(waves));
});

router.post("/wave", (req, res) => {
  const newWave = new Wave({
    userId: req.body.userId,
    waveId: req.body.waveId,
    wave: req.body.wave,
    attack: req.body.attack,
    decay: req.body.decay,
    sustain: req.body.sustain,
    release: req.body.release,
    filterCutoff: req.body.filterCutoff,
    filterQ: req.body.filterQ,
    filterType: req.body.filterType,
  });

  newWave.save().then((wave) => res.send(wave));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
