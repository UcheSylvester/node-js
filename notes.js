const fs = require("fs");

const getNotes = () => {
  return "Your notes...";
};

// ADDING NOTES
const addNote = (title, body) => {
  let notes = loadNotes();

  const existingNote = isNoteExisting(title, notes);

  if (existingNote) {
    const modifiedNotes = notes.map((note) =>
      note.title === title ? { title, body } : note
    );

    notes = modifiedNotes;
  } else {
    notes.push({
      title,
      body,
    });
  }

  saveNotes(notes);
};

// REMOVE NOTE
const removeNote = (title) => {
  console.log({ title });

  let notes = loadNotes();

  // Do nothing if there is no notes
  if (!notes.length) return;

  const isExisting = isNoteExisting(title, notes);

  if (isExisting) {
    const modifiedNotes = notes.filter((note) => note.title !== title);

    notes = modifiedNotes;

    saveNotes(notes);
  } else {
    console.log("couldn't find note with the given title");
  }
};

// UTILS
const isNoteExisting = (noteTitle, notes) =>
  notes.find((note) => note.title === noteTitle);

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);

  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
  /***
   * Get notes, convert to object and return the notes,
   *  or return an empty array if error or notes.json doesn't
   */

  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote };
