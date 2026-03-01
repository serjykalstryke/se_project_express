const User = require("../models/user");

exports.getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      console.error("Error fetching users:", err);
      res.status(500).send({ message: err.message });
    });
};

exports.createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send({ message: err.message });
    });
};

exports.deleteAllUsers = (req, res) => {
  User.deleteMany({})
    .then(() => {
      res.send({ message: "All users have been deleted" });
    })
    .catch((err) => {
      console.error("Error deleting users:", err);
      res.status(500).send({ error: "An error occurred while deleting users" });
    });
};

exports.getUserById = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Invalid user ID format" });
      }
      return res.status(500).send({ message: err.message });
    });
};

exports.updateUserById = (req, res) => {
  const { userId } = req.params;

  User.findByIdAndUpdate(userId, req.body, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      return res.send(user);
    })
    .catch((err) => {
      console.error("Error updating user:", err);
      if (err.name === "CastError") {
        return res.status(400).send({ error: "Invalid user ID format" });
      }
      if (err.name === "ValidationError") {
        return res.status(400).send({ error: err.message });
      }
      return res.status(500).send({ error: "An error occurred while updating the user" });
    });
};

exports.deleteUserById = (req, res) => {
  const { userId } = req.params;

  User.findByIdAndDelete(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ error: "User not found" });
      }
      return res.send({ message: "User has been deleted" });
    })
    .catch((err) => {
      console.error("Error deleting user:", err);
      if (err.name === "CastError") {
        return res.status(400).send({ error: "Invalid user ID format" });
      }
      return res.status(500).send({ error: "An error occurred while deleting the user" });
    });
};