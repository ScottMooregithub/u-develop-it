const mysql = require("mysql2");

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

module.exports = db;
