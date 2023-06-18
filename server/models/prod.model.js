const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: false },
    discount: { type: Number, required: true, default: 0 },
    category: { type: String, required: true },
    sub_category: { type: String, required: true },
    topic: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, required: true },
    image: { type: String, required: true },
    qty: { type: Number, required: true, default: 10 },
    description: { type: String, required: false },
    level: { type: String, required: true },
    details: {
      type: [],
      validate: (v) => Array.isArray(v) && v.length > 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
