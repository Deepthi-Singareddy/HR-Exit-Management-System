const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/register", (req, res) => {

  const {
    name,
    email,
    password,
    role
  } = req.body;

  db.run(
    `INSERT INTO users
    (name, email, password, role)
    VALUES (?, ?, ?, ?)`,
    [name, email, password, role],
    function(err){

      if(err){
        return res.status(500).json(err);
      }

      res.json({
        message: "User Registered"
      });
    }
  );
});

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  db.get(
    `SELECT * FROM users
     WHERE email=? AND password=?`,
    [email, password],
    (err, row) => {

      if(err){
        return res.status(500).json(err);
      }

      if(!row){
        return res.status(401).json({
          message: "Invalid credentials"
        });
      }

      res.json({
        message: "Login success",
        user: row
      });
    }
  );
});

module.exports = router;