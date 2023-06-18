require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();
// const { welcomeMail } = require("../utils");
const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const User = require("../models/user.model");

router.get("/signup-popup", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/signup-popup", async (req, res) => {
  try {
    let new_user = await await User.findOne({ email: req.body.email })
      .lean()
      .exec();

    if (new_user)
      return res.status(400).send({ message: "Please try another email" });

    new_user = await User.create(req.body);

    const token = newToken(new_user);
    res.cookie("Bearer ", token, { httpOnly: true });

    //   eventEmitter.on("User Register", welcomeMail);
    //   eventEmitter.emit("User Register", {
    //     from: "admin@giftcart.com",
    //     to: new_user.email,
    //     new_user,
    //   });

    return res.status(200).send({ new_user, token });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/login-popup", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .send({ message: "Please try another email or password" });
    }

    const match = user.checkPassword(req.body.password);
    if (!match) {
      return res.status(400).send({ message: "Password is wrong" });
    }
    const token = newToken(user);

    res.cookie("Bearer ", token, { httpOnly: true });
    res.send({ user, token });
  } catch (error) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
