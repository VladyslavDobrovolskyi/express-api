const express = require('express')
const router = express.Router()
const {
  getUsers,
  getUserById,
  editUserById,
  deleteUserById,
  createUser,
} = require('../controllers/UserController')

router.get('/', getUsers)
router.get('/:id', getUserById)
router.put('/:id', editUserById)
router.delete('/:id', deleteUserById)
router.post('/', createUser)

module.exports = router
