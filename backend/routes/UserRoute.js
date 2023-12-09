const express = require('express');
const { getUsers, getUserById, saveUser } = require('../controllers/UserController.js')
const router = express.Router();

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', saveUser)

module.exports = router