const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "..", "public");
console.log(path.join(__dirname, "..", "public"));
app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.get("", (req, res) => {
  res.render("index");
});
app.get("/help", (req, res) => {
  res.render("help");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.send([
    {
      name: "harish",
      age: 10,
    },
    {
      name: "neha",
      age: 20,
    },
  ]);
});

app.listen(9999, () => {
  console.log(`server as started at http://localhost:9999/`);
});
