const express = require("express");
const app = express();

const connect = require("./config/db");
app.use(express.json());

const PORT = process.env.PORT || 8080;

const prodController = require("./controller/prod.controller");

app.use("/courses", prodController);

app.listen(PORT, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
  console.log(`listening of port ${PORT}`);
});
