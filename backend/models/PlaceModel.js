const mongoose = require('mongoose');

const Place = mongoose.model('Place', {
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

// const place1 = new Place({
//     name: 'First Core Coffee',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     address: 'Dipatiukur, Bandung',
//     category: 'cafe',
//     img: 'https://source.unsplash.com/1010x780?cafe-coffee'
// })

// place1.save().then((place) => console.log(place))

module.exports = Place