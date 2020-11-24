const yargs = require("yargs");

const notesUtils = require("./notes");

const { getNotes, addNote, removeNote, listNotes } = notesUtils;

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
  handler: ({ title, body }) => {
    addNote(title, body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove note",
  builder: {
    title: {
      describe: "remove note",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    removeNote(title);
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "list all notes",
  handler: (args) => {
    listNotes();
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
