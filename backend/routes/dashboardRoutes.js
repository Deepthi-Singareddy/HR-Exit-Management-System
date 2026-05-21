
const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/exits", (req, res) => {

  db.all(
    `SELECT status, COUNT(*) as count
    FROM resignation_requests
    GROUP BY status`,
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
