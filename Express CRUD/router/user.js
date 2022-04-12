const express = require("express");
const {
  createUser,
  deleteUserById,
  GetById,
  GetUser,
  updateUser,
} = require("../controller/user.js");

const router = express.Router();
router.post("/", createUser); // CREATE
router.patch("/:id", updateUser); // update
router.get("/", GetUser); // READ
router.get("/:id", GetById); // READ
router.delete("/:id", deleteUserById); // delete

module.exports = router;
