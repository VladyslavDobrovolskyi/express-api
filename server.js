require('dotenv').config()

const express = require('express')
const app = express()

const morgan = require('morgan')

const mongoose = require('mongoose')

const Router = require('./routes/User')

const PORT = process.env.PORT || 3000
const DB_URL = process.env.DB_URL

mongoose
    .connect(DB_URL)
    .then(() => console.log(`Database: Successfully connected`))
    .catch((err) => console.log(`Database: Connection ERROR (${err.message})`))

app.use(morgan(process.env.LOG_LEVEL))

app.use('/users', Router)

app.listen(PORT, (error) => {
    error
        ? console.log(`Server: ${error.message}`)
        : console.log(`Server: Started successfully,
            Listening on 127.0.0.1:${PORT}`)
})

app.get('/', (req, res) => {
    res.end(`<h1>127.0.0.1:${PORT}</h1>`)
})
