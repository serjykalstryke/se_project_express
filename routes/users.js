const router = require("express").Router();
const {
  getAllUsers,
  createUser,
  getUserById,
} = require("../controllers/users");

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:userId", getUserById);

module.exports = router;