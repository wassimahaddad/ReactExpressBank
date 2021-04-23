const mongoose = require("mongoose");
const { uri } = require("../../config/keys");

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
