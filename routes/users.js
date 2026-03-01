const router = require("express").Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/users");

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:userId", getUserById);
router.put("/:userId", updateUserById);
router.delete("/:userId", deleteUserById);

module.exports = router;