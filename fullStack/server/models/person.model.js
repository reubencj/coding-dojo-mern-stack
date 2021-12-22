const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Person", PersonSchema);
