const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    secondName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User
