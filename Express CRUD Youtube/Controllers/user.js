import { v4 as uuidv4 } from "uuid";
let userObject = [
  // {
  //   firstName: "harish",
  //   lastName: "kumar",
  //   age: 21,
  // },
];
export const getUser = (req, res) => {
  console.log("/user router was required by the client");
  res.send(userObject);
};
export const deleteUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = userObject.find((user) => user.id === id);
  if (!foundUser) {
    return res.send("no user is found");
  }
  userObject = userObject.filter((user) => user.id !== id);
  res.send("the user is deleted sucessfully");
};
export const createUser = (req, res) => {
  userObject.push({
    ...req.body,
    id: uuidv4(),
  });
  res.send("post request was recived of " + req.body.firstName);
};
export const getUserById = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(userObject);
  const foundUser = userObject.find((user) => user.id === id);
  if (foundUser) {
    return res.send(foundUser);
  }
  res.send("no user is found");
};

export const UpdateUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = userObject.find((user) => user.id === id);
  if (!foundUser) {
    return res.send("no user is found");
  }
  const newObject = {
    ...foundUser,
    ...req.body,
  };
  userObject = userObject.map((user) => {
    if (user.id == id) return newObject;
    return user;
  });
  res.send();
};
