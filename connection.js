const mysql = require("mysql");
const start = require("./index")

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "yE5KN3Om8!",
  database: "employee_trackerdb"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

