const express = require("express");

const router = express.Router();

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./employee_exit.db");

db.run(`
CREATE TABLE IF NOT EXISTS assets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  employee TEXT,
  asset TEXT,
  status TEXT
)
`);

router.post("/", (req, res) => {

  const { employee, asset, status } = req.body;

  db.run(
    `
    INSERT INTO assets (
      employee,
      asset,
      status
    )
    VALUES (?, ?, ?)
    `,
    [employee, asset, status],
    function(error){

      if(error){

        return res.status(500).json({
          error:error.message
        });
      }

      res.json({
        message:"Asset Submitted"
      });
    }
  );
});

router.get("/", (req, res) => {

  db.all(
    "SELECT * FROM assets",
    [],
    (error, rows) => {

      if(error){

        return res.status(500).json({
          error:error.message
        });
      }

      res.json(rows);
    }
  );
});

module.exports = router;