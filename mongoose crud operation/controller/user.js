// CREATE OPERATION
const Person = require("../db/db.js");

/// completed
const createUser = async (req, res) => {
  try {
    const foundUser = await Person.findOne({
      firstName: req.body.firstName,
    }).exec();
    if (foundUser) {
      return res.send("user name is already taken, try with another name ");
    }
    const newUser = new Person({ ...req.body });
    newUser.save().then(() => {
      res.send("new user is created successfully");
    });
  } catch (err) {
    res.send("Something went wrong, plz try agin");
  }
};
// Update user
const updateUser = async (req, res) => {
  try {
    const foundUser = await Person.findByIdAndUpdate(req.params.id, req.body);
    if (!foundUser) {
      return res.send("No user is found with that ID, try with another ID");
    }
    res.send("user is updated sucessfully");
  } catch (err) {
    res.send("Something went wrong, plz try agin");
  }
};
/// READ Opertaion
// completed
const GetUser = async (req, res) => {
  try {
    const users = await Person.find({});
    res.send(users);
  } catch (err) {
    res.send("Something went wrong,  plz try agin");
  }
};

// completed
const GetById = async (req, res) => {
  const { id } = req.params;
  try {
    const foundUser = await Person.findById(id).exec();
    if (!foundUser) {
      return res.send("No user is found with that ID, try again");
    }
    return res.send(foundUser);
  } catch (err) {
    res.send("Something went wrong,  plz try agin");
  }
};

//DELETE user /// completed?hs=hahah&nsn=233
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const foundUser = await Person.findByIdAndDelete(id).exec();
    if (!foundUser) {
      return res.send("No user is found with that ID, try again");
    }
    return res.send("user deleted sucessfully");
  } catch (err) {
    res.send("Something went wrong,  plz try agin");
  }
};

module.exports = {
  createUser,
  updateUser,
  GetUser,
  GetById,
  deleteUserById,
};
