const ClothingItem = require("../models/clothingItem");
const {
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = require("../utils/errors");

const getAllClothingItems = (req, res) => {
  ClothingItem.find({})
    .then((clothingItems) => res.send(clothingItems))
    .catch((err) => {
      console.error(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

const createClothingItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;
  const owner = req.user._id;

  ClothingItem.create({ name, weather, imageUrl, owner })
    .then((clothingItem) => res.status(201).send(clothingItem))
    .catch((err) => {
      console.error(err);

      if (err.name === "ValidationError") {
        return res
          .status(BAD_REQUEST)
          .send({ message: "Invalid data passed when creating an item." });
      }

      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

const getClothingItemById = (req, res) => {
  const { clothingItemId } = req.params;

  ClothingItem.findById(clothingItemId)
    .orFail()
    .then((clothingItem) => res.send(clothingItem))
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST)
          .send({ message: "Invalid clothing item ID passed." });
      }

      if (err.name === "DocumentNotFoundError") {
        return res
          .status(NOT_FOUND)
          .send({ message: "No clothing item found with the requested ID." });
      }

      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

const deleteClothingItemById = (req, res) => {
  const { clothingItemId } = req.params;

  ClothingItem.findByIdAndDelete(clothingItemId)
    .orFail()
    .then((clothingItem) => res.send(clothingItem))
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST)
          .send({ message: "Invalid clothing item ID passed." });
      }

      if (err.name === "DocumentNotFoundError") {
        return res
          .status(NOT_FOUND)
          .send({ message: "No clothing item found with the requested ID." });
      }

      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

const likeClothingItem = (req, res) => {
  const { clothingItemId } = req.params;
  const userId = req.user._id;

  ClothingItem.findByIdAndUpdate(
    clothingItemId,
    { $addToSet: { likes: userId } },
    { new: true }
  )
    .orFail()
    .then((clothingItem) => res.send(clothingItem))
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST)
          .send({ message: "Invalid clothing item ID passed." });
      }

      if (err.name === "DocumentNotFoundError") {
        return res
          .status(NOT_FOUND)
          .send({ message: "No clothing item found with the requested ID." });
      }

      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

const unlikeClothingItem = (req, res) => {
  const { clothingItemId } = req.params;
  const userId = req.user._id;

  ClothingItem.findByIdAndUpdate(
    clothingItemId,
    { $pull: { likes: userId } },
    { new: true }
  )
    .orFail()
    .then((clothingItem) => res.send(clothingItem))
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res
          .status(BAD_REQUEST)
          .send({ message: "Invalid clothing item ID passed." });
      }

      if (err.name === "DocumentNotFoundError") {
        return res
          .status(NOT_FOUND)
          .send({ message: "No clothing item found with the requested ID." });
      }

      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: "An error has occurred on the server." });
    });
};

module.exports = {
  getAllClothingItems,
  createClothingItem,
  getClothingItemById,
  deleteClothingItemById,
  likeClothingItem,
  unlikeClothingItem,
};