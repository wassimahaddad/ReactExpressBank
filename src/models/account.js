const mongoose = require("mongoose");

const Account = mongoose.model("Account", {
  user_id: {
    type: String,
    required: true,
  },
  cash: {
    type: Number,
    default: 0,
  },
  credit: {
    type: Number,
    default: 0,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = Account;
