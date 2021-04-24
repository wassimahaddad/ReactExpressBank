const Account = require("../models/account");

// ------------------------- Transfer ------------------------------------
const transfer = async (req, res) => {
  const from_acc = await Account.findById(req.body.from_acc);
  const to_acc = await Account.findById(req.body.to_acc);
  const account1 = await Account.findById(from_acc);
  const account2 = await Account.findById(to_acc);

  if (
    account1.isActive == false ||
    account2.isActive === false ||
    (req.body.operation === "transfer" &&
      from_acc.cash + from_acc.credit <= req.body.sum)
  ) {
    return res.status(400).send({
      error:
        "Not enough funds to complete the operation or one of the accounts is locked",
    });
  } else {
    try {
      const account1 = await Account.findByIdAndUpdate(
        from_acc._id,
        { cash: from_acc.cash - req.body.sum },
        {
          new: true,
          runValidators: true,
        }
      );

      const account2 = await Account.findByIdAndUpdate(
        to_acc._id,
        { cash: to_acc.cash + req.body.sum },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!account1 || !account2) {
        return res.status(404).send();
      }

      res.send(`Transaction completed  
        ${account1} 
        ${account2}`);
    } catch (e) {
      res.status(400).send(e);
    }
  }
};

// ------------------------- Widthdraw ------------------------------------

const withdraw = async (req, res) => {
  const from_acc = await Account.findById(req.body.from_acc);
  const account = await Account.findById(from_acc);
  if (
    account.isActive === false ||
    (req.body.operation === "withdraw" &&
      from_acc.cash + from_acc.credit <= req.body.sum)
  ) {
    return res.status(400).send({
      error: "Account is locked or not enough funds to complete the operation",
    });
  } else {
    try {
      const account = await Account.findByIdAndUpdate(
        from_acc._id,
        { cash: from_acc.cash - req.body.sum },
        {
          new: true,
          runValidators: true,
        }
      );

      if (!account) {
        return res.status(404).send();
      }

      res.send(`Transaction completed  
          ${account} 
         }`);
    } catch (e) {
      res.status(400).send(e);
    }
  }
};

module.exports = { transfer, withdraw };
