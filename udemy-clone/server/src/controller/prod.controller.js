const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Product = require("../models/prod.model");

router.get("", async (req, res) => {
  try {
    let products = await Product.find().lean().exec();
    return res.status(200).send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let product = await Product.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let product = await Product.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );

    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    let product = await Product.create(req.body);

    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
