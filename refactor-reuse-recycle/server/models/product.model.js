const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Need a title"],
    },
    price: {
      type: Number,
      required: [true, "Need to include price"],
    },
    description: {
      type: String,
      required: [true, "Need a description"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
