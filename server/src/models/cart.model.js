const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "product",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Cart = new mongoose.model("cart", cartSchema);

module.exports = Cart;
