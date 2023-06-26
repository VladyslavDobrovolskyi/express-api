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
            match: /^([А-ЯЁ][а-яё]{1,}|[A-Z][a-z]{1,})$/,
        },
        secondName: {
            type: String,
            maxlength: 50,
            minlength: 2,
            trim: true,
            required: true,
            match: /^([А-ЯЁ][а-яё]{1,}|[A-Z][a-z]{1,})$/,
        },
        emailAddress: {
            type: String,
            maxlength: 255,
            minlength: 2,
            trim: true,
            required: false,
            unique: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        },
        phoneNumber: {
            type: String,
            maxlength: 13,
            minlength: 10,
            required: true,
            trim: true,
            match: /^\+380\d{9}$/,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            immutable: true,
        },
    },
    { versionKey: false }
)

const User = mongoose.model('User', userSchema)

module.exports = User
