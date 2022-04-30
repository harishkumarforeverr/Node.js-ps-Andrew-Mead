const express = require("express");
const auth = require("../middleware/auth.js");
const Task = require("../models/task.js");
const User = require("../models/user.js");
const Router = express.Router();
// CRUD
Router.get("/", auth, async (req, res) => {
  try {
    // method -1
    // const results = await Task.find({ owner: req.user.id });
    // console.log(results);
    // method -2
    await req.user.populate("mytasks");
    res.send(req.user.mytasks);
  } catch (error) {
    res.status(500).send("error");
  }
});
Router.get("/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const results = await Task.findOne({ _id, owner: req.user.id });
    console.log(results);
    if (!results) {
      return res.status(400).send("no tasks are found");
    }
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});
Router.post("/", auth, async (req, res) => {
  try {
    const updatedObject = {
      ...req.body,
      owner: req.user._id,
    };
    const newTask = new Task(updatedObject);
    const result = await newTask.save();
    console.log(result);
    res.status(201).send("new stack is created sucessfully");
  } catch (error) {
    res.status(400).send(error);
  }
});
Router.put("/:id", auth, async (req, res) => {
  const allowedKeys = ["description", "completed"];
  const userPassedKeys = Object.keys(req.body);
  const passedCorrectKeysBoolean = userPassedKeys.every((val) =>
    allowedKeys.includes(val)
  );
  if (!passedCorrectKeysBoolean) {
    return res.status(400).send("please enter valid property");
  }
  try {
    // const data = await Task.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    const data = await Task.findOne({ _id: req.params.id, owner: req.user.id });
    // console.log(data, { _id: req.params.id, owner: req.body.id });
    if (!data) {
      return res.status(400).send("no user found with that id");
    }
    userPassedKeys.forEach((property) => {
      data[property] = req.body[property];
    });
    await data.save();
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
Router.delete("/:id", auth, async (req, res) => {
  // {new:true, runValidators:true}
  try {
    // console.log(req.params.id, req.body);
    const data = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });
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
