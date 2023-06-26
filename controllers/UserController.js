const User = require('../models/User')
const phoneFormater = require('../utils/phoneFormater')

const getUsers = async (req, res) => {
    try {
        const users = await User.find().exec()
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Ошибка сервера' })
    }
}
const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' })
        }
        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Ошибка сервера' })
    }
}
const editUserById = async (req, res) => {
    try {
        const id = req.params.id
        const updates = req.body
        const options = { new: true }

        const updatedUser = await User.findByIdAndUpdate(id, updates, options)
        if (!updatedUser) {
            return res.status(404).json({ message: 'Пользователь не найден' })
        }
        res.json(updatedUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Ошибка сервера' })
    }
}
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id

        const deletedUser = await User.findByIdAndDelete(id)
        if (!deletedUser) {
            return res.status(404).json({ message: 'Пользователь не найден' })
        }
        res.json({ message: 'Пользователь удален' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Ошибка сервера' })
    }
}

const createUser = async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        phoneNumber: phoneFormater(req.body.phoneNumber),
    })

    try {
        const savedUser = await user.save()
        res.json(savedUser)
    } catch (err) {
        res.json({ error: err })
    }
}

module.exports = {
    getUsers,
    getUserById,
    editUserById,
    deleteUserById,
    createUser,
}
