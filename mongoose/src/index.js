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
