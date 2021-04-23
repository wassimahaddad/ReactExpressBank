const mongoose = require("mongoose");
const { uri } = require("../../config/keys");

mongoose.connect(`mongodb+srv://${uri}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
