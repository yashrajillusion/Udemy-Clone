const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://yash:yash123@yash.z6ajm.mongodb.net/udemy?retryWrites=true&w=majority"
  );
};
