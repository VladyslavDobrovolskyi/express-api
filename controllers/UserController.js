const User = require('../models/User')

const getUsers = async (req, res) => {
    try {
        const users = await User.find().exec()
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error.' })
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found.' })
        }
        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error.' })
    }
}

const editUserById = async (req, res) => {
    try {
        const id = req.params.id
        const updates = req.body
        const options = { new: true }

        const updatedUser = await User.findByIdAndUpdate(id, updates, options)
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found.' })
        }
        res.json(updatedUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error.' })
    }
}

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id

        const deletedUser = await User.findByIdAndDelete(id)
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found.' })
        }
        res.json({ message: 'User deleted' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error.' })
    }
}

const createUser = async (req, res) => {
    const existingUser = await User.findOne({
        emailAddress: req.body.emailAddress,
    })
    if (existingUser) {
        return res
            .status(400)
            .json({ error: 'User with this email already exists.' })
    }

    const user = new User({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress,
    })

    try {
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    getUsers,
    getUserById,
    editUserById,
    deleteUserById,
    createUser,
}
