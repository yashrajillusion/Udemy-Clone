const express = require("express");
const cors = require("cors");
const app = express();

const connect = require("./config/db");
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

const prodController = require("./controller/prod.controller");
const userController = require("./controller/user.controller");
const cartController = require("./controller/cart.controller");
const wishlistController = require("./controller/wishlist.controller");

app.use("/courses", prodController);
app.use("/join", userController);
app.use("/cart", cartController);
app.use("/wishlist", wishlistController);

app.listen(PORT, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
  console.log(`listening of port ${PORT}`);
});
