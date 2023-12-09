// controllers/placeController.js
const Places = require("../models/PlaceModel");

const getAllPlaces = async (req, res) => {
  try {
    const places = await Places.find();
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPlace = async (req, res) => {
  const { name, type } = req.body;
  try {
    const newPlace = await Places.create({ name, type });
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add update, delete, and other CRUD operations as needed

module.exports = {
  getAllPlaces,
  createPlace,
}