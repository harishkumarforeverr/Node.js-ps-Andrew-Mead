const { MongoClient, ObjectId, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const dbName = "TaskManger";
async function main() {
  await client.connect();
  console.log("connection is setup sucessfully");
  const db = client.db(dbName);
  // collection for user
  try {
    // users Collections
    // const collection = db.collection("users");
    // const result = await collection.findOne({
    //   _id: new ObjectId("62591f19ccbae82c01051b8f"),
    // });
    // console.log(result);
    // const result = await collection.find({ name: "harish" });
    // const mydoc = await result.toArray();
    // const count = await result.count();
    // console.log(mydoc);
    // console.log(count);
    //
    // Task collections
    const collection = db.collection("Tasks");
    const lastUser = await collection.findOne({
      _id: new ObjectId("625918846064c76baf8e6248"),
    });
    console.log(lastUser);
    const inCompletedTask = await collection.find({ completed: false });
    const res = await inCompletedTask.toArray();
    const count = await inCompletedTask.count();
    console.log(count);
    console.log(res);
  } catch (err) {
    console.log("error");
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
