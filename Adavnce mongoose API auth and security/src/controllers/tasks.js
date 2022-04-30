const express = require("express");
const Task = require("../models/task.js");

const Router = express.Router();
// CRUD
Router.get("/", async (req, res) => {
  try {
    const results = await Task.find({});
    console.log(results);
    res.send(results); 
  } catch (error) {
    res.status(500).send(error);
  }
});
Router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const results = await Task.findById(id);
    console.log(results);
    if (!results) {
      return res.status(400).send("no tasks are found");
    }
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});
Router.post("/", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const result = await newTask.save();
    console.log(result);
    res.status(201).send("new stack is created sucessfully");
  } catch (error) {
    res.status(400).send(error);
  }
});
Router.put("/:id", async (req, res) => {
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
    const data = await Task.findById(req.params.id);
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
Router.delete("/:id", async (req, res) => {
  // {new:true, runValidators:true}
  try {
    console.log(req.params.id, req.body);
    const data = await Task.findByIdAndDelete(req.params.id);
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
