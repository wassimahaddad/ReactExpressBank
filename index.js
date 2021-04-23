const express = require("express");
const cors = require("cors");
const path = require("path");
require("./src/db/mongoose");

const app = express();
app.use(cors());
const userRouter = require("./src/Routers/bank");

app.use(express.json());
app.use(userRouter);

const publicDirectory = path.join(__dirname, "client/build");
app.use(express.static(publicDirectory));

// -------------------------------------------
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
