const router = require("express").Router();
const {
  createUser,
  login,
  getCurrentUser,
  updateProfile,
} = require("../controllers/users");
const auth = require("../middlewares/auth");

router.post("/signin", login);
router.post("/signup", createUser);
router.get("/users/me", auth, getCurrentUser);
router.patch("/users/me", auth, updateProfile);

module.exports = router;