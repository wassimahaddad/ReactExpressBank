const mongoose = require("mongoose");
const { user, password } = require("../../config/keys");

mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0.1ki7z.mongodb.net/myBankDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
