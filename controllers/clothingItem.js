const ClothingItem = require('../models/clothingItem');

const getAllClothingItems = (req, res) => {
  ClothingItem.find({})
    .then((clothingItems) => res.send(clothingItems))
    .catch((err) => res.status(500).send({ message: 'Error fetching clothing items', error: err }));
};

const createClothingItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;
  ClothingItem.create({ name, weather, imageUrl })
    .then((clothingItem) => res.status(201).send({ data: clothingItem }))
    .catch((err) => res.status(400).send({ message: 'Error creating clothing item', error: err }));
};

const getClothingItemById = (req, res) => {
  const { clothingItemId } = req.params;
  ClothingItem.findById(clothingItemId)
    .then((clothingItem) => {
      if (!clothingItem) {
        return res.status(404).send({ message: 'Clothing item not found' });
      }
      return res.send({ data: clothingItem });
    })
    .catch((err) => res.status(400).send({ message: 'Invalid clothing item ID', error: err }));
};

const updateClothingItemById = (req, res) => {
  const { clothingItemId } = req.params;
  const { name, imageUrl } = req.body;
  ClothingItem.findByIdAndUpdate(clothingItemId, { name, imageUrl }, { new: true, runValidators: true })
    .then((clothingItem) => {
      if (!clothingItem) {
        return res.status(404).send({ message: 'Clothing item not found' });
      }
      return res.send(clothingItem);
    })
    .catch((err) => res.status(400).send({ message: 'Error updating clothing item', error: err }));
};

const deleteClothingItemById = (req, res) => {
  const { clothingItemId } = req.params;
  ClothingItem.findByIdAndDelete(clothingItemId)
    .then((clothingItem) => {
      if (!clothingItem) {
        return res.status(404).send({ message: 'Clothing item not found' });
      }
      return res.send({ message: 'Clothing item deleted successfully' });
    })
    .catch((err) => res.status(400).send({ message: 'Invalid clothing item ID', error: err }));
};

const likeClothingItem = (req, res) => {
  const { clothingItemId } = req.params;
  const userId = '507f1f77bcf86cd799439011';

  ClothingItem.findByIdAndUpdate(
    clothingItemId,
    { $addToSet: { likes: userId } },
    { new: true }
  )
    .then((clothingItem) => {
      if (!clothingItem) {
        return res.status(404).send({ message: 'Clothing item not found' });
      }
      return res.send(clothingItem);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Invalid item id' });
      }
      return res.status(500).send({ message: 'Error liking clothing item' });
    });
};

const unlikeClothingItem = (req, res) => {
  const { clothingItemId } = req.params;
  const userId = '507f1f77bcf86cd799439011';

  ClothingItem.findByIdAndUpdate(
    clothingItemId,
    { $pull: { likes: userId } },
    { new: true }
  )
    .then((clothingItem) => {
      if (!clothingItem) {
        return res.status(404).send({ message: 'Clothing item not found' });
      }
      return res.send(clothingItem);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Invalid item id' });
      }
      return res.status(500).send({ message: 'Error unliking clothing item' });
    });
};



module.exports = {
  getAllClothingItems,
  createClothingItem,
  getClothingItemById,
  updateClothingItemById,
  deleteClothingItemById,
  likeClothingItem,
  unlikeClothingItem,
};