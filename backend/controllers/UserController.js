const User = require('../models/UserModel.js')

const getUsers = async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const saveUser = async (req, res) => {
    const user = new User(
        // name: req.body.name,
        // email: req.body.email,
        // password: req.body.password,
        req.body
    )
    try {
        const insertedUser = await User.save();
        res.status(201).json(insertedUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


module.exports = {
    getUsers, getUserById, saveUser
}