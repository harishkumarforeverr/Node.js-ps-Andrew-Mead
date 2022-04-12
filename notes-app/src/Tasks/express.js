const express = require("express");
const Notes = require("./my notes");
const app = express();
const Obj = [];
app.post("/", (req, res) => {
  console.log(req);
  Obj.push(req.body);
  res.send("saved");
});

// app.use(express.static(path.join(__dirname, "index.html")));
app.put("/", (req, res) => {
  res.send("update request to homepage");
});
app.get("/", (req, res) => {
  res.send(Obj);
});

app.delete("/", (req, res) => {
  res.send("delete world");
});

app.listen(9000, () => {
  console.log("port is running at 9000");
});
