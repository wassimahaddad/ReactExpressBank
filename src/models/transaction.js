const mongoose = require("mongoose");

const Transaction = mongoose.model("Transaction", {
  from_account_id: {
    type: String,
    required: true,
  },
  to_account_id: {
    type: String,
  },
  operation: {
    type: String,
  },

  ammount: {
    type: String,
    required: true,
  },
});

module.exports = Transaction;
