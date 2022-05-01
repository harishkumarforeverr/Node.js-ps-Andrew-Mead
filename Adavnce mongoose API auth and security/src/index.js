const express = require("express");
require("./db/db.js");
// require("../jsonwebtoken/jsonwebtoken.js");
// require("./toJSON");
const userRouter = require("./controllers/user.js");
const TaskRouter = require("./controllers/tasks.js");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

// express middile start here
// KYEPOINTS: always remeber these  express midlle must be in at top all user defined routes
// app.use((req, res, next) => {
//   // console.log("working", req.path, req.method);
//   if (req.method == "GET") {
//     return res.send("get request are  probident");
//   }
//   next();
// });
// app.use((req, res, next) => {
//   return res.status(503).send("site is under maintaince, try after few months");
// });
// express middile ends here
app.use("/users", userRouter);
app.use("/tasks", TaskRouter);

app.listen(PORT, () => {
  console.log(`server is started at the PORT : ${PORT}`);
});

// yarn run env-cmd node log.js
console.log("NODE_ENV:", process.env.PORT);
// const bcrypt = require("bcryptjs");
// const password = "harish123";
// const main = async () => {
//   const hash = await bcrypt.hash(password, 8);
//   console.log(hash);
//   const res = await bcrypt.compare("harish123", hash);
//   console.log(res);
// };
// main();

/// populate example

// // example - 1
// const User = require("./models/user.js");
// const Tasks = require("./models/task.js");
// const main = async () => {
//   const task = await Tasks.findById("626d0a6661814110346aa558");
//   await task.populate("owner");
//   console.log(task.owner);
// };

// main();

// // example - 2;
// const User = require("./models/user.js");
// // const Tasks = require("./models/task.js");
// const main = async () => {
//   const user = await User.findById("626d0a1761814110346aa552");
//   await user.populate("mytasks");
//   console.log(user.mytasks);
// };

// main();
