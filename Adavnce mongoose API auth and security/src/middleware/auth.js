const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const validateToken = jwt.verify(token, "harishkumar(securityKey)");
 
    const findUser = await User.findOne({
      _id: validateToken._id,
      "tokens.token": token,
    });
    // console.log("user", findUser, validateToken);
    if (!findUser) {
      throw new Error();
    }
    req.user = findUser;
    req.token = token;
    next();
  } catch (e) {
    res.status(402).send("please authencate to login");
  }
};

module.exports = auth;
