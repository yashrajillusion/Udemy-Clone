const mongoose = require("mongoose");
const Cart = require("../models/cart.model");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const allitems = await Cart.find({ userId: req.params.id })
      .populate({ path: "productId" })
      .lean()
      .exec();
    return res.status(200).send(allitems);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    const userId = mongoose.Types.ObjectId(req.body.userId);
    const productId = mongoose.Types.ObjectId(req.body.productId);
    const prod = await Cart.deleteOne({ userId, productId }).lean().exec();
    return res.status(200).send(prod);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const prod = await Cart.create(req.body);
    return res.status(200).send(prod);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
