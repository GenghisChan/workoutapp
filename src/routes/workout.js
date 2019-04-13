const Workout = require("../models/workout");
const express = require("express");
const router = new express.Router();

router.get("/", async (req, res) => {
  try {
    const workout = await Workout.find({});
    res.send(workout);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  const workout = new Workout(req.body);

  try {
    await workout.save();
    res.status(201).send(workout);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
