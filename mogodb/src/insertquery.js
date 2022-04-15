const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const dbName = "TaskManger";
const ID = new ObjectId();
// console.log(ID);
// console.log(ID.getTimestamp());
// console.log(ID.id.length);
// console.log(ID.toHexString().length);
// console.log(ID);
async function main() {
  await client.connect();
  console.log("connection is setup sucessfully");
  const db = client.db(dbName);

  // collection for user
  const collection = db.collection("users");
  const insertOne = await collection.insertOne({
    a: 4,
    _id: ID,
  });
  console.log("insertOne", insertOne);
  // const insertResult = await collection.insertMany([
  //   { a: 1 },
  //   { a: 2 },
  //   { a: 3 },
  // ]);
  // console.log("Inserted documents =>", insertResult);
  // const insertResult = await collection.insertMany([
  //   {
  //     a: 1,
  //   },
  //   {
  //     a: 2,
  //   },
  //   {
  //     a: 3,
  //   },
  // ]);
  // console.log("inserseted sucesfully", insertResult);

  // collection for tasks
  // const collection = db.collection("Tasks");
  try {
    // const insertOne = await collection.insertOne({
    //   name: "coding",
    //   completed: true,
    // });
    // console.log("insertOne", insertOne);
    // const inserMany = await collection.insertMany([
    //   {
    //     name: "documentation",
    //     completed: false,
    //   },
    //   {
    //     name: "going home",
    //     completed: true,
    //   },
    //   {
    //     name: "movie",
    //     completed: false,
    //   },
    // ]);
    // const result = await collection.insertMany([
    //   {
    //     name: "harish",
    //     age: 21,
    //   },
    //   {
    //     name: "satish",
    //     age: 20,
    //   },
    //   {
    //     name: "neha",
    //     age: 22,
    //   },
    // ]);
    // console.log("insermanu", inserMany);
  } catch (e) {
    console.log("something went wrong");
  }
  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// to start the server
// mongod.exe --dbpath ~/db
/// need to past these code in git blash only then only it gone work

// here monogo.exe is environmenet variable which we set
// --dbpath means we are saying that from here all the values are realted to paths ani
// ~ meann root director and  db is the folder which i created in the root folder
