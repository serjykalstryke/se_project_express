const router = require("express").Router();

const auth = require("../middlewares/auth");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItem");
const {
  createClothingItem,
  getClothingItemById,
  deleteClothingItemById,
  likeClothingItem,
  unlikeClothingItem,
} = require("../controllers/clothingItem");

// public route
router.use("/items", clothingItemRouter);

// protect everything below this line
router.use(auth);

// protected user routes
router.use("/users", userRouter);

// protected item routes
router.post("/items", createClothingItem);
router.get("/items/:clothingItemId", getClothingItemById);
router.delete("/items/:clothingItemId", deleteClothingItemById);
router.put("/items/:clothingItemId/likes", likeClothingItem);
router.delete("/items/:clothingItemId/likes", unlikeClothingItem);

module.exports = router;