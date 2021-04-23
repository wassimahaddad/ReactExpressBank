const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://dbUser:My1stClut3r@cluster0.1ki7z.mongodb.net/myBankDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
