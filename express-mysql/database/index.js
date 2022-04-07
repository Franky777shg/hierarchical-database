const mysql2 = require("mysql2");

const db = mysql2.createConnection({
  host: "localhost",
  user: "frankyshg",
  database: "jcwdvl05",
  password: "Mysql123",
});

module.exports = { db };
