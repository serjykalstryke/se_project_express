const router = require("express").Router();
const { getAllUsers, createUser, deleteAllUsers, getUserById, updateUserById, deleteUserById } = require("../controllers/users");

router.get("/", getAllUsers);

router.post("/", createUser);

router.delete("/", deleteAllUsers);

router.get("/:userid", getUserById);

router.put("/:userid", updateUserById);

router.delete("/:userid", deleteUserById);

module.exports = router;