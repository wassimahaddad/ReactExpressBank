const mongoose = require("mongoose");
const { user, password, cluster } = require("../../config/keys");

mongoose.connect(
  `mongodb+srv://${user}:${password}@${cluster}/myBankDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
