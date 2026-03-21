const router = require("express").Router();
const { getAllClothingItems } = require("../controllers/clothingItem");

router.get("/", getAllClothingItems);

module.exports = router;