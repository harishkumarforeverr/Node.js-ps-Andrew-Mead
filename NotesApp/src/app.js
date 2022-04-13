const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./note");
// console.log(chalk.red.inverse.bold("Error"));

// console.log(process.argv);
yargs.version("1.1.0");
yargs.command({
  command: "add",
  describe: "adding a new notes",
  builder: {
    title: {
      describe: "title of the notes",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body of the title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("title : ", argv.title + ",  body : ", argv.body);
    notes.addNotes(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "removing a new notes",
  builder: {
    title: {
      describe: "title of notes to be deleted",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.deleteNotes(argv.title);
    console.log("a notes is removed", argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "listing all the notes",
  handler() {
    const data = notes.loadNotes();
    console.log(chalk.blue.inverse("your notes"));
    data.forEach(({ title }) => console.log(chalk.green.inverse(title)));
  },
});
yargs.command({
  command: "read",
  describe: "reading all the notes",
  builder: {
    title: {
      describe: "title of the record",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log(argv.title);
    if (notes.ReadNotes(argv.title)) {
      console.log(chalk.green.inverse("Notes  was found"));
    } else {
      console.log(chalk.red.inverse("No notes was found"));
    }
  },
});
// console.log(yargs.argv);
yargs.parse();
