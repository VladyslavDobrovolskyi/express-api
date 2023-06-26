require('dotenv').config()

const express = require('express')
const app = express()

const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const sanitizer = require('express-mongo-sanitize')

const Router = require('./routes/User')

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000
// eslint-disable-next-line no-undef
const DB_URL = process.env.DB_URL

mongoose
    .connect(DB_URL)
    .then(() => console.log(`Database: Successfully connected`))
    .catch((err) => console.log(`Database: Connection ERROR (${err.message})`))

// eslint-disable-next-line no-undef
app.use(morgan(process.env.LOG_LEVEL))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(sanitizer())
app.use('/users', Router)

app.get('/', (req, res) => {
    res.end(`<h1>127.0.0.1:${PORT}</h1>`)
})

app.listen(PORT, (error) => {
    error
        ? console.log(`Server: ${error.message}`)
        : console.log(`Server: Started successfully,
            Listening on 127.0.0.1:${PORT}`)
})
