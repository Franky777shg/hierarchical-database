const router = require("express").Router();

const { category } = require("../controllers");

router.get("/allCategory", category.getAllCategory);

module.exports = router;
