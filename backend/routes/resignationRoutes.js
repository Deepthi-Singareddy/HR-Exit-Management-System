
const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {

  const {
    employee_id,
    employee_name,
    reason,
    exit_date
  } = req.body;

  db.get(
    `SELECT * FROM resignation_requests
     WHERE employee_id=? AND status!='Completed'`,
    [employee_id],
    (err, row) => {

      if (row) {
        return res.json({
          message: "Duplicate resignation not allowed"
        });
      }

      db.run(
        `INSERT INTO resignation_requests
        (employee_id, employee_name, reason, status, exit_date)
        VALUES (?, ?, ?, ?, ?)`,
        [
          employee_id,
          employee_name,
          reason,
          "Submitted",
          exit_date
        ],
        function(err) {

          if (err) {
            return res.status(500).json(err);
          }

          res.json({
            message: "Resignation submitted",
            id: this.lastID
          });
        }
      );
    }
  );
});

router.get("/", (req, res) => {

  db.all(
    `SELECT * FROM resignation_requests`,
    [],
    (err, rows) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(rows);
    }
  );
});

module.exports = router;
