const express = require("express");
// const Account = require("../models/account");
// const Transaction = require("../models/transaction");
const User = require("../models/user");
const Account = require("../models/account");
const router = new express.Router();

router.use(express.json());
// -------------------------------------------
router.post("/api/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
      console.log("user created");
    })
    .catch((e) => {
      res.status(400).send(e);
      console.log("user not created");
    });
});
// -------------------------------------------
router.get("/api/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

// -------------------------------------------
router.post("/api/accounts", (req, res) => {
  const account = new Account(req.body);

  account
    .save()
    .then(() => {
      res.status(201).send(account);
      console.log("account created");
    })
    .catch((e) => {
      res.status(400).send(e);
      console.log("account not created");
    });
});
// -------------------------------------------
router.get("/api/accounts", (req, res) => {
  Account.find({})
    .then((accounts) => {
      res.send(accounts);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
// -------------------------------------------
module.exports = router;
