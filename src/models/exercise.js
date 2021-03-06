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
    type: Number,
    trim: true
  },
  sets: {
    type: Number,
    trim: true
  }
});

module.exports = mongoose.model("Exercise", exerciseSchema);
