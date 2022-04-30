const auth = require("../middleware/auth.js");
const express = require("express");
const User = require("../models/user.js");

const Router = express.Router();
// CRUD

Router.get("/login", async (req, res) => {
  try {
    const foundUser = await User.validUserLogin(
      req.body.email,
      req.body.password
    );
    // console.log(foundUser);
    const token = await foundUser.generateJsonWebToken();
    // await foundUser.save();
    // const updatedObject = await foundUser.getUserPublicProfile();
    res.status(200).json({ foundUser, token });
  } catch {
    res.status(400).send("authencation failed");
  }
});
Router.get("/me", auth, async (req, res) => {
  try {
    // console.log("re.userre.user", req.user);
    res.send(req.user);
  } catch (error) {
    res.status(500).send(error);
  }
});
Router.get("/logout", auth, async (req, res) => {
  try {
    // console.log("req.user", req.user.tokens.length);
    req.user.tokens = req.user.tokens.filter((token) => {
      console.log(token.token === req.token);
      return token.token !== req.token;
    });
    await req.user.save();
    // console.log("req.user", req.user.tokens.length);
    // console.log("token", req.token);
    res.status(200).send("user is logout conatining the token ");
  } catch (e) {
    res.status(501).send("something is went wrong");
  }
});

Router.get("/logoutAll", auth, async (req, res) => {
  try {
    // console.log(req.user);
    req.user.tokens = [];
    // console.log("token", req.token);
    await req.user.save();
    res.status(200).send("user is logout from all devices");
  } catch (e) {
    res.status(501).send("something is went wrong");
  }
});
Router.get("/:id", async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const results = await User.findById(id);
    if (!results) {
      return res.status(400).send("no user is found");
    }
    // console.log(results);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

Router.post("/", async (req, res) => {
  // console.log("User", User);
  try {
    const newUser = new User(req.body);
    const token = await newUser.generateJsonWebToken();

    await newUser.save();
    res.status(200).send({
      newUser,
      token,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
Router.put("/me", auth, async (req, res) => {
  const allowedKeys = ["name", "email", "password", "age"];
  const userPassedKeys = Object.keys(req.body);
  const passedCorrectKeysBoolean = userPassedKeys.every((val) =>
    allowedKeys.includes(val)
  );
  if (!passedCorrectKeysBoolean) {
    return res.status(400).send("please enter valid property");
  }
  try {
    const data = req.user;
    userPassedKeys.forEach((property) => {
      data[property] = req.body[property];
    });
    await data.save();
    res.status(200).send("user data updated sucessfully");
  } catch (error) {
    res.status(500).send(error);
  }
});
Router.delete("/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).send("user deleted sucessfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = Router;
