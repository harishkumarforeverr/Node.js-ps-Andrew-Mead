const data = [
  {
    name: "harish",
    age: 21,
    school: "govt",
    dep: "IT",
    status: "active",
    langugaes: ["telugu", "hindi", "english"],
    coding: ["c", "c++", "java"],
  },
  {
    name: "Govind",
    age: 21,
    dep: "Police",
    school: "govt",
    status: "active",
    langugaes: ["telugu", "hindi", "english"],
    coding: ["c", "c++", "java"],
  },
  {
    name: "neha",
    age: 22,
    school: "private",
    dep: "IT",
    status: "inactive",
    langugaes: ["telugu", "hindi", "english"],
    coding: ["c", "c++", "java"],
  },
  {
    name: "satish",
    age: 21,
    dep: "doctor",
    school: "unknown",
    status: "inactive",
    langugaes: ["telugu", "hindi", "english"],
    coding: ["c", "c++", "java"],
  },
  {
    name: "Godavari",
    age: 21,
    dep: "doctor",
    school: "unknown",
    status: "inactive",
    langugaes: ["telugu", "hindi", "english"],
    coding: ["c", "c++", "java"],
  },
];

db.users.insertMany([
  {
    name: "harish",
    age: 21,
    school: "govt",
    dep: "IT",
    status: "active",
    langugaes: ["telugu", "hindi", "english"],
    coding: ["c", "c++", "java"],
    style: [1, 2, 3, 4, 5],
  },
  {
    name: "Govind",
    age: 21,
    dep: "Police",
    school: "govt",
    status: "active",
    langugaes: ["telugu", "hindi", "english"],
    coding: ["c", "c++", "java"],
    style: [11, 12, 13, 14, 15],
  },
  {
    name: "neha",
    age: 22,
    school: "private",
    dep: "IT",
    status: "inactive",
    langugaes: ["telugu", "hindi", "english"],
    coding: ["c", "c++", "java"],
    style: [21, 22, 23, 24, 25],
  },
  {
    name: "satish",
    age: 21,
    dep: "doctor",
    school: "unknown",
    status: "inactive",
    langugaes: ["telugu", "hindi", "english"],
    coding: ["c", "c++", "java"],
    style: [31, 32, 33, 34, 35],
  },
  {
    name: "Godavari",
    age: 21,
    dep: "doctor",
    school: "unknown",
    status: "inactive",
    langugaes: ["telugu", "hindi", "english"],
    coding: ["c", "c++", "java"],
    style: [41, 42, 43, 44, 45],
  },
]);

 
db.dep.insertMany([
  {
    name: "Tech",
    code: 123,
  },
  {
    name: "HR",
    code: 223,
  },
  {
    name: "Devops",
    code: 323,
  },
]); 
db.users.insertMany([
  {
    name: "harish",
    dept: "Tech",
  },
  {
    name: "satish",
    dept: "HR",
  },
  {
    name: "manish",
    dept: "Tech",
  },
]); 
db.users.aggregate({
  $lookup: {
    from: "dep",
    localField: "dept",
    foreignField: "name",
    as: "anything",
  },
});
