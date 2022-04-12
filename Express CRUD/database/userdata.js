const fs = require("fs");
// Read
const loadData = () => {
  try {
    const BufferData = fs.readFileSync("notes22.json");
    const StringData = BufferData.toString();
    const JSONData = JSON.parse(StringData);
    return JSONData;
  } catch (e) {
    return [];
  }
};

// save
const SaveDate = (data) => {
  const oldData = loadData();
  const newData = [...oldData, ...data];
  const JSONdata = JSON.stringify(newData);
  console.log("hello world", JSONdata);

  fs.writeFileSync("notes22.json", JSONdata);
};

const SaveUserData = (data) => {  
  const JSONdata = JSON.stringify(data);
  console.log("hello world", JSONdata);

  fs.writeFileSync("notes22.json", JSONdata);
};

module.exports = { loadData, SaveDate ,SaveUserData};


