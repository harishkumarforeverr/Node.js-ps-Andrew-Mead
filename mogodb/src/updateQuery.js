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
    const collection = db.collection("users");

    // updateOne
    // const updateData = await collection.updateOne(
    //   {
    //     _id: new ObjectId("62591f19ccbae82c01051b90"),
    //   },
    //   {
    //     $set: {
    //       name: "ganga",
    //     },
    //   }
    // );
    // const updateData = await collection.updateOne(
    //   {
    //     name: "ganga",
    //   },
    //   {
    //     $inc: {
    //       age: 3,
    //     },
    //   }
    // );
    // console.log(updateData);
    ///updateMany
    // const updateData = await collection.updateMany(
    //   {
    //     name: "aaa",
    //   },
    //   {
    //     $set: {
    //       age: 2002,
    //     },
    //   }
    // );
    // console.log(updateData);
    //
    // Task collections
    // const collection = db.collection("Tasks");
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
