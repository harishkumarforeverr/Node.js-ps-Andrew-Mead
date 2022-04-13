import express from "express";
import {
  createUser,
  deleteUserById,
  getUser,
  getUserById,
  UpdateUserById,
} from "../Controllers/user.js";
const Router = express.Router();

Router.get("/", getUser);

Router.get("/:id", getUserById);

Router.delete("/:id", deleteUserById);

Router.post("/", createUser);
Router.patch("/:id", UpdateUserById);

export default Router;
