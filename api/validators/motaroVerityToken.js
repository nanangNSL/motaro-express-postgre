const jwt = require("jsonwebtoken");
require('dotenv').config()


const checkToken = async (req, res, next) => {
  try {
    const token = req.headers?.authorization;
    console.log(token);
    const decoded = jwt.verify(
      token?.substring(7, token),
      "323f44766800b8aa7552c7a33f9682a07cea92f93b8a574455ecbb6cfefc312d"
    );
    console.log(decoded);
    if (decoded) {
      next();
    }
  } catch (error) {
    res.status(401).send("token tidak valid");
  }
};

module.exports = { checkToken };
