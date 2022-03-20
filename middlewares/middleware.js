const jwt = require("jsonwebtoken");

const loginCheck = async function (req, res, next) {
  try {
    const token = req.headers["x-api-key"];
    if (!token) {
      return res.status(403).send({
        status: false,
        message: `Missing authentication token in request`,
      });
    }

    const verify = jwt.verify(token, "functionUp@thorim2022");
    if (!verify) {
      return res.status(403).send({
        status: false,
        message: `Invalid authentication token in request`,
      });
    }

    req.authorId = verify.authorId;
    next();
  } catch (error) {
    res.status(500).send({ status: false, Error: error.message });
  }
};

module.exports = {
  loginCheck,
};
