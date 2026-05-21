
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./employee_exit.db", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to SQLite");
  }
});

module.exports = db;
