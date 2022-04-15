const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Tasks");
const userschema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Person = mongoose.model("users", userschema);

module.exports = Person;

// const firstUser = new Person({
//   firstname: "seenu",
//   lastname: "kumar",
//   age: 21,
// });
// firstUser.save().then(() => console.log("user is saved successfully"));

// cmd to start the server
// mongod.exe --dbpath ~/db
