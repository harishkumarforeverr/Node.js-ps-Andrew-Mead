const fs = require("fs");
// const Book = {
//   title: "harish is good boy",
//   author: "harish",
// };
// console.log(Book.title);
// const JSONString = JSON.stringify(Book);
// console.log(JSONString);
// console.log(JSONString.title);

// const parseData = JSON.parse(JSONString);
// console.log(parseData);
// console.log(parseData.title);

// const StringData = JSON.stringify(Book);
// fs.writeFileSync("book.json", StringData);

const BufferData = fs.readFileSync("book.json");
const DataString = BufferData.toString();
const Data = JSON.parse(DataString);
Data.name = "govind";
Data.age = "30";
console.log(Data);
fs.writeFileSync("book.json", JSON.stringify(Data));
