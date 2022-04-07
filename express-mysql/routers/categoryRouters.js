const router = require("express").Router();

const { category } = require("../controllers");

router.get("/allCategory", category.getAllCategory);
router.post("/newCategory", category.insertCategory);

module.exports = router;
