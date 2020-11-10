const fs = require("fs");

// fs.writeFileSync("notes.txt", "Hello world!!");
fs.appendFileSync("notes.txt", " appended messge");
