const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/demo");

const mongoose = require("mongoose");
const User = mongoose.model("users", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    validate: {
      validator: function (val) {
        if (val < 0) {
          throw new Error("age muste be greater than 0");
        }
      },
    },
  },
});

// module.exports = User;

const me = new User([
  {
    name: "Harish ",
    age: "22",
  },
  {
    name: "Seenu",
    age: "21",
  },
  {
    name: "Subash",
    age: "20",
  },
  {
    name: "Satish",
    age: "19",
  },
]);
const main = async () => {
  try {
    const res = await me.save();
    console.log(res);
  } catch (error) {
    console.log("something went wrong", error);
  }
};

main();
