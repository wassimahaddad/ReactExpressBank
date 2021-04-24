const express = require("express");
const Account = require("../models/account");
const accountsRouter = new express.Router();

accountsRouter.use(express.json());

// -------------- Create accounts -----------------------------
accountsRouter.post("/api/accounts", async (req, res) => {
  try {
    const account = await new Account(req.body);

    if (!account) {
      res.status(404).send();
    }
    account.save();
    res.status(201).send(account);
    console.log("account created");
  } catch (e) {
    res.status(400).send(e);
    console.log("account not created");
  }
});

// ------------- Load all accounts ------------------------------
accountsRouter.get("/api/accounts", async (req, res) => {
  try {
    const accounts = await Account.find({});

    if (!accounts) {
      res.status(404).send();
    }

    res.send(accounts);
  } catch (e) {
    res.status(500).send();
  }
});
// ------------- Load account by ID------------------------------
accountsRouter.get("/api/accounts/:id", async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);

    if (!account) {
      res.status(404).send();
    }

    res.send(account);
  } catch (e) {
    res.status(500).send();
  }
});

// ------------- Update account ------------------------------
accountsRouter.patch("/api/accounts/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["isActive", "cash", "credit"];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!account) {
      return res.status(404).send();
    }

    res.send(account);
  } catch (e) {
    res.status(400).send(e);
  }
});

// -------------------------------------------
module.exports = accountsRouter;
