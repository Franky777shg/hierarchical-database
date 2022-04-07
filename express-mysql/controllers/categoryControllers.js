const { db } = require("../database");

module.exports = {
  getAllCategory: (req, res) => {
    const getQuery = "select * from category;";
    db.execute(getQuery, (err, result) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(result);
    });
  },
  insertCategory: (req, res) => {
    const { name, parent_id } = req.body;
    const insertQuery = `insert into category(name, parent_id) values(${db.escape(
      name
    )}, ${db.escape(parent_id)});`;
    db.execute(insertQuery, (err, result) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(result);
    });
  },
  // buat controller untuk update dan delete
};
