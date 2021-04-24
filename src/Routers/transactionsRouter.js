const express = require("express");
const Account = require("../models/account");
const transactionRouter = new express.Router();
const { transfer, withdraw } = require("../Utils/Utils");

transactionRouter.use(express.json());

// ------------- make transction between 2 accounts ------------------------------

transactionRouter.patch("/api/transactions", async (req, res) => {
  const operation = await req.body.operation;
  switch (operation) {
    case "transfer":
      transfer(req, res);
      break;
    case "withdraw":
      withdraw(req, res);
      break;
    default:
      res.status(500).send("a server error occured");
  }
});

// -------------------------------------------
module.exports = transactionRouter;