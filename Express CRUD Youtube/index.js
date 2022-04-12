import express from "express";
import bodyParser from "body-Parser";
import userRouter from "./router/user.js";
const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //it convert the incoming req body to json Object autocmically
app.use("/users", userRouter);

app.get("/", (req, res) => {
  console.log("recived a get request from clinet");
  res.send("wellcome to the homepage");
});
app.listen(5000, () => {
  console.log(`The server is started at : http://localhost:${PORT}`);
});
