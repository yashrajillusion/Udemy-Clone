const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema(
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

const Wihslist = new mongoose.model("wishlist", wishlistSchema);

module.exports = Wihslist;
