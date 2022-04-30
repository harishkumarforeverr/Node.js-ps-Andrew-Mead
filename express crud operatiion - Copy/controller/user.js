// CREATE OPERATION
const { loadData, SaveDate, SaveUserData } = require("../database/userdata.js");
const { v4: uuidv4 } = require("uuid");

/// completed
const createUser = (req, res) => {
  const newUser = {
    ...req.body,
    id: uuidv4(),
  };
  const users = loadData();
  const userFound = users.find((user) => user.firstName == newUser.firstName);
  console.log("userFound", userFound);
  if (userFound) {
    return res.send("user name is already taken try with differnt user");
  }
  SaveDate([newUser]);
  res.send("new user is created sucessfully ");
};
// Update user
const updateUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const users = loadData();
  const userFound = users.find((user) => user.id == id);
  if (!userFound) {
    return res.send("no user was found ");
  }
  const updatedData = {
    ...userFound,
    ...req.body,
  };
  const updateObject = users.map((user) => {
    if (user.id == id) {
      return updatedData;
    }
    return user;
  });
  SaveUserData(updateObject);
  res.send("user is updated successfully");
};
/// READ Opertaion
// completed
const GetUser = (req, res) => {
  console.log("a get request is made by user /");
  res.send(loadData());
};

// completed
const GetById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const users = loadData();
  const userFound = users.find((user) => user.id == id);
  if (!userFound) {
    return res.send("no user was found ");
  }
  res.send(userFound);
};

//DELETE user /// completed?hs=hahah&nsn=233
const deleteUserById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const users = loadData();
  const userFound = users.find((user) => user.id == id);
  if (!userFound) {
    return res.send("no user was found ");
  }
  console.log(users);
  const newUser = users.filter((user) => user.id !== id);
  console.log("newUser", newUser);
  SaveUserData(newUser);
  res.send("user is deleted sucessfully");
};

module.exports = {
  createUser,
  updateUser,
  GetUser,
  GetById,
  deleteUserById,
};
