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
    res.status(200).send(foundUser);
  } catch {
    res.status(400).send("authencation failed");
  }
});
Router.get("/", async (req, res) => {
  try {
    const results = await User.find({});
    console.log(results);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
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
    console.log(results);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

Router.post("/", async (req, res) => {
  console.log("User", User);
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    // console.log(result);
    res.status(201).send("create user");
  } catch (error) {
    res.status(400).send(error);
  }
});
Router.put("/:id", async (req, res) => {
  const allowedKeys = ["name", "email", "password", "age"];
  const userPassedKeys = Object.keys(req.body);
  const passedCorrectKeysBoolean = userPassedKeys.every((val) =>
    allowedKeys.includes(val)
  );
  if (!passedCorrectKeysBoolean) {
    return res.status(400).send("please enter valid property");
  }
  try {
    // console.log(req.params.id, req.body);
    // const data = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    const data = await User.findById(req.params.id);
    if (!data) {
      return res.status(400).send("no user found with that id");
    }
    userPassedKeys.forEach((property) => {
      data[property] = req.body[property];
    });
    await data.save();
    // console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
Router.delete("/:id", async (req, res) => {
  // {new:true, runValidators:true}
  try {
    console.log(req.params.id, req.body);
    const data = await User.findByIdAndDelete(req.params.id);
    console.log(data);
    if (!data) {
      return res.status(400).send("no user found with that id");
    }
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = Router;
