const students = [
  {
    name: "harish",
    age: 22,
    course: "nodejs",
  },
  {
    name: "seenu",
    age: 21,
    course: "css",
  },
  {
    name: "subash",
    age: 20,
    course: "react",
  },
  {
    name: "praveen",
    age: 22,
    course: "css",
  },
  {
    name: "Ganeshyam",
    age: 21,
    course: "nodejs",
  },
  {
    name: "manish",
    age: 21,
    course: "php",
  },
];

const courses = [
  {
    ourCourse: "react",
    price: 2000,
  },
  {
    ourCourse: "css",
    price: 1500,
  },
  {
    ourCourse: "react",
    price: 3000,
  },
  {
    ourCourse: "php",
    price: 4000,
  },
];

db.students.insertMany([
  {
    name: "harish",
    age: 22,
    course: "nodejs",
  },
  {
    name: "seenu",
    age: 21,
    course: "css",
  },
  {
    name: "subash",
    age: 20,
    course: "react",
  },
  {
    name: "praveen",
    age: 22,
    course: "css",
  },
  {
    name: "Ganeshyam",
    age: 21,
    course: "nodejs",
  },
  {
    name: "manish",
    age: 21,
    course: "php",
  },
]);

db.courses.insertMany([
  {
    ourCourse: "react",
    price: 2000,
  },
  {
    ourCourse: "css",
    price: 1500,
  },
  {
    ourCourse: "react",
    price: 3000,
  },
  {
    ourCourse: "php",
    price: 4000,
  },
]);

db.courses.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "ourCourse",
      foreignField: "course",
      as: "studentInrolled",
    },
  },
]);
// THEME is here studentInrolled property will be added and is in the form of Array
// and
// student is the collection from which we are browing the object
/// here localfield and foreignField values must be same undali i.e their dataType and values must be match
// here localField is the field where field values is current collection filed key name which we are manipuatling now
// here foreignField is the field where field values is other collection filed key name whcih we are barowing the values

/// output
const output = [
  {
    _id: ObjectId("626127c41d11999192736fd9"),
    ourCourse: "react",
    price: 2000,
    studentInrolled: [
      {
        _id: ObjectId("626127bd1d11999192736fd5"),
        name: "subash",
        age: 20,
        course: "react",
      },
    ],
  },
  {
    _id: ObjectId("626127c41d11999192736fda"),
    ourCourse: "css",
    price: 1500,
    studentInrolled: [
      {
        _id: ObjectId("626127bd1d11999192736fd4"),
        name: "seenu",
        age: 21,
        course: "css",
      },
      {
        _id: ObjectId("626127bd1d11999192736fd6"),
        name: "praveen",
        age: 22,
        course: "css",
      },
    ],
  },
  {
    _id: ObjectId("626127c41d11999192736fdb"),
    ourCourse: "react",
    price: 3000,
    studentInrolled: [
      {
        _id: ObjectId("626127bd1d11999192736fd5"),
        name: "subash",
        age: 20,
        course: "react",
      },
    ],
  },
  {
    _id: ObjectId("626127c41d11999192736fdc"),
    ourCourse: "php",
    price: 4000,
    studentInrolled: [
      {
        _id: ObjectId("626127bd1d11999192736fd8"),
        name: "manish",
        age: 21,
        course: "php",
      },
    ],
  },
];
