require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRoute = require('./routes/UserRoute');
const PlaceRoute = require('./routes/PlaceRoute');
const Place = require('./models/PlaceModel');

// Express app
const app = express();

require("./utils/db");

// app.get('/', (req, res) => {
//     res.render('LoginPage', {
//         title: 'Login',
//         layout: "../frontend/src/pages/LoginPage.jsx"
//     })
// })

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//halaman explore
app.get('/places', async (req, res) => {
  Place.find().then((places) => {
    res.send(places);
  })

    // const places = await Place.find();

    // res.render('Explore', {
    //     title: 'Explore',
    //     layout: "../frontend/src/pages/Explore.jsx",
    //     places
    // })
})


// Middleware
app.use(express.json());
app.use(cors());
// app.use(UserRoute);
// app.use(PlaceRoute);
// // Handle /explore route
// app.use('/api', PlaceRoute);

// Middleware for logging
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// Routing
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});



// Listen for app
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
