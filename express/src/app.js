const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

// setting the paths
const publicPath = path.join(__dirname, "..", "public");
const ViewsPaths = path.join(__dirname, "..", "templates/views");
const hbsPartials = path.join(__dirname, "..", "templates/hbs");

// set the handle Bars and seting the views foldders
app.set("view engine", "hbs");
app.set("views", ViewsPaths);
hbs.registerPartials(hbsPartials);

// serving the static files
app.use(express.static(publicPath));

// all the gets requests
app.get("", (req, res) => {
  res.render("index", {
    name: "harish",
    age: "21",
    createdBy: "index harish",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    name: "seenu",
    age: "21",
    createdBy: "help harish",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    name: "satish",
    age: "21",
    createdBy: "about harish",
  });
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

app.get("/help/*", (req, res) => {
  res.render("helpNotFound");
});
app.get("*", (req, res) => {
  res.render("NotFound");
});
app.listen(9999, () => {
  console.log(`server as started at http://localhost:9999/`);
});

// key pints to tell the node.js to watch .hbs file files also we need to write
// these cmd in the termial
/// nodemon node app.js -e js,hbs
