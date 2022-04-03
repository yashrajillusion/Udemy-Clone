require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return reject(err);
      resolve(user);
    });
  });
};

const authenticate = async (req, res, next) => {
  const cookieHeader = req.headers?.cookie;
  if (!cookieHeader)
    return res.status(200).send({ auth: false, message: "Please login" });
  let token = cookieHeader.split("=")[1];
  let user;
  try {
    user = await verifyToken(token);
  } catch (error) {
    return res
      .status(500)
      .send({ auth: false, message: "Authorization token invalid" });
  }
  req.user = user.user;
  return next();
};

module.exports = { authenticate, verifyToken };
