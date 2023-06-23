const User = require('../models/User')

const getUsers = (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((error) => console.log(error))
}

module.exports = {
    getUsers,
}
