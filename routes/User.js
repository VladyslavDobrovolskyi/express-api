const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((error) => console.log(error))
})

module.exports = router
