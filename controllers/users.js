const User = require('../models/user');

exports.getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.error('Error fetching users:', err);
      res.status(500).send({ error: 'An error occurred while fetching users' });
    });
};

exports.createUser = (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      console.error('Error creating user:', err);
      res.status(500).send({ error: 'An error occurred while creating the user' });
    });
};

exports.deleteAllUsers = (req, res) => {
  User.deleteMany({})
    .then(() => {
      res.send({ message: 'All users have been deleted' });
    })
    .catch((err) => {
      console.error('Error deleting users:', err);
      res.status(500).send({ error: 'An error occurred while deleting users' });
    });
};

exports.getUserById = (req, res) => {
  User.findById(req.params.userid)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }
      res.send(user);
    })
    .catch((err) => {
      console.error('Error fetching user:', err);
      res.status(500).send({ error: 'An error occurred while fetching the user' });
    });
};

exports.updateUserById = (req, res) => {
  User.findByIdAndUpdate(req.params.userid, req.body, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }
      res.send(user);
    })
    .catch((err) => {
      console.error('Error updating user:', err);
      res.status(500).send({ error: 'An error occurred while updating the user' });
    });
};

exports.deleteUserById = (req, res) => {
  User.findByIdAndDelete(req.params.userid)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }
      res.send({ message: 'User has been deleted' });
    })
    .catch((err) => {
      console.error('Error deleting user:', err);
      res.status(500).send({ error: 'An error occurred while deleting the user' });
    });
};