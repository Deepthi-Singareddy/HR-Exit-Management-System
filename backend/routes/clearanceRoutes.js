const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {

  const {
    employee,
    department,
    status
  } = req.body;

  db.run(
    `INSERT INTO clearances
    (employee, department, status)
    VALUES (?, ?, ?)`,
    [employee, department, status],
    function(err){

      if(err){
        return res.status(500).json(err);
      }

      res.json({
        message: "Clearance Saved"
      });
    }
  );
});

router.get("/", (req, res) => {

  db.all(
    `SELECT * FROM clearances`,
    [],
    (err, rows) => {

      if(err){
        return res.status(500).json(err);
      }

      res.json(rows);
    }
  );
});

module.exports = router;