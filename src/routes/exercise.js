const Exercise = require("../models/exercise");
const express = require("express");
const router = new express.Router();

router.post("/exercises", async (req, res) => {
  const exercise = new Exercise(req.body);

  try {
    await exercise.save();
    res.status(201).send(exercise);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
