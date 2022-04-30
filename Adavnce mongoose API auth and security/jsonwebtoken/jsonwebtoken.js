const jwt = require("jsonwebtoken");
var token = jwt.sign({ _id: "harish" }, "harishkumarforever");
// var token = jwt.sign({ _id: "harish" }, "harishkumarforever", {
//   expiresIn: "1h",
// });

// console.log("token", token);

const result = jwt.verify(token, "harishkumarforever");
// const result = jwt.verify(token, "harishkumarforever1");

console.log("results", result);
