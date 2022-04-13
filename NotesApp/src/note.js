const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  return "your notes ....";
};
const ReadNotes = (Title) => {
  return loadNotes().find(({ title }) => title == Title);
};
// addNotes --> loadNotes
const addNotes = (title, body) => {
  const notes = loadNotes();
  const isExist = notes.find((note) => note.title === title);
  debugger;
  if (isExist) {
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
const deleteNotes = (title) => {
  const oldNotes = loadNotes();
  const newNotes = oldNotes.filter((obj) => obj.title !== title);
  if (oldNotes.length === newNotes.length) {
    console.log(chalk.red.inverse("No notes is removed"));
  } else {
    console.log(chalk.green.inverse("Notes is removed successfully"));
    saveNotes(newNotes);
  }
};
module.exports = {
  addNotes,
  getNotes,
  loadNotes,
  deleteNotes,
  ReadNotes,
};
