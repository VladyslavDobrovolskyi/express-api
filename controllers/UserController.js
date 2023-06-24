const User = require('../models/User')

const getUsers = (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((error) => console.log(error))
}

const createUser = async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        phoneNumber: req.body.phoneNumber,
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
    createUser,
}
