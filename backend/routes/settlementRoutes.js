
const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {

  const { employee_id, amount } = req.body;

  db.run(
    `INSERT INTO settlement_records
    (employee_id, amount, status)
    VALUES (?, ?, ?)`,
    [employee_id, amount, "Pending"],
    function(err) {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Settlement created"
      });
    }
  );
});

module.exports = router;
