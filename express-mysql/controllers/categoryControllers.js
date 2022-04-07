const { db } = require("../database");

module.exports = {
  getAllCategory: (req, res) => {
    const getQuery = "select * from category;";
    db.execute(getQuery, (err, result) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(result);
    });
  },
};
