const express = require("express");
const User = require("../models/user");
const usersRouter = new express.Router();
usersRouter.use(express.json());
// -------------------------------------------
usersRouter.post("/api/users", async (req, res) => {
  try {
    const user = await new User(req.body);

    if (!user) {
      res.status(404).send();
    }
    user.save();
    res.status(201).send(user);
    console.log("user created");
  } catch (e) {
    res.status(400).send(e);
    console.log("user not created");
  }
});
// -------------------------------------------
usersRouter.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});

    if (!users) {
      res.status(404).send();
    }

    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});
// -------------------------------------------
usersRouter.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});
// -------------------------------------------
usersRouter.get("/api/users/:email", async (req, res) => {
  try {
    const user = await User.find({ email: req.params.email });

    if (!user) {
      res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

// -------------------------------------------
module.exports = usersRouter;
