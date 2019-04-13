const mongoose = require("mongoose");
const validator = require("validator");

const exerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  reps: {
    type: Number,
    trim: true
  },
  duration: {
    type: Number
  }
});

module.exports = mongoose.model("Exercise", exerciseSchema);
