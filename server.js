const express = require("express");

const mysql = require("mysql2");
const { PassThrough } = require("stream");
const { resourceLimits } = require("worker_threads");

const PORT = process.env.PORT || 3001;

const app = express();

//express middleware

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// Connect to database

const db = mysql.createConnection(
  {
    host: "localhost",
    //Your mysql username,
    user: "root",
    //your mysql password,
    password: "Claudeakins3!",
    database: "election",
  },
  console.log("Connected to the election database")
);

// db.query("SELECT * FROM candidates", (err, rows) => {
//   console.log(rows);
// });

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
            VALUES(?,?,?,?)`;
const params = [1, "Ronald", "Fairbank", 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

//default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
