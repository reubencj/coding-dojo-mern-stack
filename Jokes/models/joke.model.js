const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Setup is required"],
    },
    punchLine: {
      type: String,
      required: [true, "punchline is required"],
    },
  },
  { timestamps: true }
);

const Joke = new mongoose.model("Joke", JokeSchema);

module.exports = Joke;
