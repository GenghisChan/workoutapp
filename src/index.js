const express = require("express");
const mongoose = require("mongoose");
require("./db/mongoose");

const workouts = require("./routes/workout");
const users = require("./routes/user");
const exercises = require("./routes/exercise");
const bcrypt = require("bcryptjs");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("Listening on port ", port);
});

app.use("/users", users);
app.use("/workouts", workouts);
app.use("/exercises", exercises);

const func = async () => {
  const pass = "red12345";
  const hashed = await bcrypt.hash(pass, 8);

  console.log(pass);
  console.log(hashed);

  const isMatch = await bcrypt.compare(pass, hashed);
  console.log(isMatch);
};

func();
