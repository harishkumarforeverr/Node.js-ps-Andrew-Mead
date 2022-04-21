const express = require("express");
require("./db/db.js");
const userRouter = require("./controllers/user.js");
const TaskRouter = require("./controllers/tasks.js");
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());
app.use("/users", userRouter);
app.use("/tasks", TaskRouter);

app.listen(PORT, () => {
  console.log(`server is started at the PORT : ${PORT}`);
});

// const bcrypt = require("bcryptjs");
// const password = "harish123";
// const main = async () => {
//   const hash = await bcrypt.hash(password, 8);
//   console.log(hash);
//   const res = await bcrypt.compare("harish123", hash);
//   console.log(res);
// };
// main();
