const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
//   description: {
//     type: String,
//     required: true
//   },
  tag: {
    type: String,
    required: true
  }
});

const Places = mongoose.model('Places', placeSchema);

module.exports = Places;
