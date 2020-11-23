const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes");

yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(`title: ${argv.title}`, `body: ${argv.body}`);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove note",
  handler: (args) => {
    console.log("removing note");
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "list all notes",
  handler: (args) => {
    console.log("listing notes");
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "read note",
  handler: (args) => {
    console.log("reading note");
  },
});

yargs.parse();
