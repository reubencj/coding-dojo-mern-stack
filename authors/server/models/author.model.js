const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name cannot be less than three characters"],
  },
});

module.exports = mongoose.model("Author", AuthorSchema);
