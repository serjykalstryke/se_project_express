const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getAllClothingItems,
  createClothingItem,
  deleteClothingItemById,
  likeClothingItem,
  unlikeClothingItem,
} = require("../controllers/clothingItem");

router.get("/", getAllClothingItems);

router.use(auth);

router.post("/", createClothingItem);
router.delete("/:clothingItemId", deleteClothingItemById);
router.put("/:clothingItemId/likes", likeClothingItem);
router.delete("/:clothingItemId/likes", unlikeClothingItem);

module.exports = router;