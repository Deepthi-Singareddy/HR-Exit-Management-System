
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const db = require("./config/db");

const resignationRoutes = require("./routes/resignationRoutes");
const clearanceRoutes = require("./routes/clearanceRoutes");
const assetRoutes = require("./routes/assetRoutes");
const settlementRoutes = require("./routes/settlementRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

db.serialize(() => {

  db.run(`
  CREATE TABLE IF NOT EXISTS resignation_requests(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    employee_name TEXT,
    reason TEXT,
    status TEXT,
    exit_date TEXT
  )
  `);

  db.run(`
  CREATE TABLE IF NOT EXISTS clearance_tasks(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    resignation_id INTEGER,
    department TEXT,
    status TEXT
  )
  `);

  db.run(`
  CREATE TABLE IF NOT EXISTS asset_returns(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    asset_name TEXT,
    returned INTEGER
  )
  `);

  db.run(`
  CREATE TABLE IF NOT EXISTS settlement_records(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    amount INTEGER,
    status TEXT
  )
  `);
  db.run(`
  CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT,
    role TEXT
)
`);
  db.run(`
  CREATE TABLE IF NOT EXISTS clearances(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee TEXT,
    department TEXT,
    status TEXT
)
`);
});

app.use("/api/resignations", resignationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/clearance", clearanceRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/settlements", settlementRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Employee Exit System API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
