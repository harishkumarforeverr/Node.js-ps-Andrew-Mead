const fs = require("fs");
const getNotes = () => {
  return "your notes ....";
};
// addNotes --> loadNotes
const addNotes = (title, body) => {
  const notes = loadNotes();
  const isExist = notes.filter((note) => note.title === title);
  // console.log(isExist)
  if (isExist.length !== 0) {
    return console.log("notes title already taken");
  }
  notes.push({
    title,
    body,
  });
  // console.log(notes);
  saveNotes(notes);
};
const loadNotes = () => {
  try {
    const BufferData = fs.readFileSync("notes.json");
    const StringData = BufferData.toString();
    return JSON.parse(StringData);
  } catch (e) {
    return [];
  }
};
// loadNotes
const saveNotes = (data) => {
  const StringData = JSON.stringify(data);
  // console.log(StringData);
  fs.writeFileSync("notes.json", StringData);
};
//
module.exports = {
  addNotes,
  getNotes,
  loadNotes,
};
