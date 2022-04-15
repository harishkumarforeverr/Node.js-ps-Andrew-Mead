const express = require("express");
const User = require("../models/user.js");

const Router = express.Router();
// CRUD
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
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    console.log(result);
    res.status(201).send("create user");
  } catch (error) {
    res.status(400).send(error);
  }
});
Router.put("/:id", async (req, res) => {
  // {new:true, runValidators:true}
  try {
    // console.log(req.params.id, req.body);
    const data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res.status(400).send("no user found with that id");
    }
    console.log(data);
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
