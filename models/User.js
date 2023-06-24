const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            maxlength: 50,
            minlength: 2,
            trim: true,
            required: true,
        },
        secondName: {
            type: String,
            maxlength: 50,
            minlength: 2,
            trim: true,
            required: true,
        },
        phoneNumber: {
            type: String,
            maxlength: 13,
            minlength: 10,
            required: true,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { versionKey: false }
)

const User = mongoose.model('User', userSchema)

module.exports = User
