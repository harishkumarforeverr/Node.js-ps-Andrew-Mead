const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/TaskManagerAPI");

const Task = mongoose.model("tasks", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task;
// const task1 = new Task({
//   description: "ffddsf",
//   completed: true,
// });

// const main = async () => {
//   try {
//     const res = await task1.save();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };

// main();
