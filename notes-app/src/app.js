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

  handler() {
    console.log("a notes is removed");
  },
});
yargs.command({
  command: "list",
  describe: "listing all the notes",
  handler() {
    console.log("listing all the notes");
  },
});
yargs.command({
  command: "read",
  describe: "reading all the notes",
  handler() {
    console.log("reading all the notes");
  },
});
// console.log(yargs.argv);
yargs.parse();
