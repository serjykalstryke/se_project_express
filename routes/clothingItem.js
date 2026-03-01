const router = require("express").Router();
const {
  getAllClothingItems,
  createClothingItem,
  getClothingItemById,
  updateClothingItemById,
  deleteClothingItemById,
  likeClothingItem,
  unlikeClothingItem,
} = require("../controllers/clothingItem");

router.get("/", getAllClothingItems);
router.post("/", createClothingItem);
router.get("/:clothingItemId", getClothingItemById);
router.put("/:clothingItemId", updateClothingItemById);
router.delete("/:clothingItemId", deleteClothingItemById);
router.put("/:clothingItemId/likes", likeClothingItem);
router.delete("/:clothingItemId/likes", unlikeClothingItem);



module.exports = router;