const mongoose = require("mongoose");
const { user, password, srv } = require("../../config/keys");

mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0.${srv}.mongodb.net/myBankDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
