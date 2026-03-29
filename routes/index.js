const router = require("express").Router();
const { createUser, login } = require("../controllers/users");
const usersRouter = require("./users");
const clothingItemsRouter = require("./clothingItem");

router.post("/signin", login);
router.post("/signup", createUser);

router.use("/users", usersRouter);
router.use("/items", clothingItemsRouter);

module.exports = router;