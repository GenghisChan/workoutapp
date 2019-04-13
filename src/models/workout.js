const mongoose = require("mongoose");
const exerciseSchema = require("./exercise").schema;

const Workout = mongoose.model("Workout", {
  plan: {
    type: [exerciseSchema]
  }
});

module.exports = Workout;
