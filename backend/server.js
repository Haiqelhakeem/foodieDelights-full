require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRoute = require('./routes/UserRoute');
const PlaceRoute = require('./routes/PlaceRoute');

//express app
const app = express();

//connect to db
mongoose.connect("mongodb://localhost:27017/FoodieDelights")
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err)
});
db.once('open', () => {
    console.log('connected to db');
})

app.use(express.json());
app.use(cors());
app.use(UserRoute);
app.use(PlaceRoute);

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/explore', PlaceRoute)

//routing
app.get('/', (req, res) => {
    res.json({mssg: 'Hello World'})
})

//listen for app
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})