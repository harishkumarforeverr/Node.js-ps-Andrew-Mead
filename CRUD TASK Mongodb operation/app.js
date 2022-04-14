const express = require("express");
const BodyParser = require("body-parser");
const UserRouter = require("./router/user.js");
const PORT = 9000;
const app = express();
app.use(BodyParser.json());

app.use("/users", UserRouter);

app.get("/", (req, res) => {
  res.send("welcome to javascript Landing page");
});

app.listen(PORT, () => {
  console.log(`the server is start at http://localhost:${PORT}`);
});
